import {Component, Query} from "@angular/core";
import {TiffDateTime} from "../../../../utilities/types/TiffDateTime";
import {FormControl} from "@angular/forms";


enum SingleSelectModes{
  Before,
  On,
  After,
}
@Component({
  selector: "right-panel-date-query",
  templateUrl: "date-query.component.html",
  styleUrls: ["date-query.component.scss"],
  providers: []

})
export class DateQueryComponent{


  singleSelectMode: SingleSelectModes;
  singleSelectModesModelNames: Array<[SingleSelectModes, string]> =
    [
      [SingleSelectModes.On, "On"],
      [SingleSelectModes.Before, "Before"],
      [SingleSelectModes.After, "After"],
    ]


  datePickerControl: FormControl = new FormControl('');
  dateRangeStartControl: FormControl = new FormControl('');
  dateRangeEndControl: FormControl = new FormControl('');



  constructor() {
    this.singleSelectMode = SingleSelectModes.On;

  }

  async pushDate() {
    let selected_date: Date = this.datePickerControl.getRawValue();
    this.datePickerControl.reset();

    switch (this.singleSelectMode) {
      case SingleSelectModes.On:

        let end = new Date(selected_date.getFullYear(), selected_date.getMonth(), selected_date.getDate(), 23, 59, 59);

        await globalThis.db_connection.submitQueryToCenterPanel(this.constructRangeQuery(selected_date, end))

        break;
      case SingleSelectModes.Before:
        await globalThis.db_connection.submitQueryToCenterPanel(this.constructDateBeforeQuery(selected_date))

        break;
      case SingleSelectModes.After:
        await globalThis.db_connection.submitQueryToCenterPanel(this.constructDateAfterQuery(selected_date));

        break;
    }
  }


  async pushDateRange() {
    let start = this.dateRangeStartControl.getRawValue();
    let end = this.dateRangeEndControl.getRawValue();
    this.dateRangeStartControl.reset();
    this.dateRangeEndControl.reset();

    await globalThis.db_connection.submitQueryToCenterPanel(this.constructRangeQuery(start, end))
  }




  private constructRangeQuery(start: Date, end: Date): string{
    let startDateTime = new TiffDateTime(start);
    let endDateTime = new TiffDateTime(end);

    return `{get_field_range(DateTimeOriginal,\"${startDateTime.getNormalized()}\",\"${endDateTime.getNormalized()}\")}`
  }
  private constructDateBeforeQuery(date: Date): string{
    return `{get_field_lt(DateTimeOriginal::\"${new TiffDateTime(date).getNormalized()}\")}`;
  }

  private constructDateAfterQuery(date: Date): string{

   return `{get_field_gt(DateTimeOriginal::\"${new TiffDateTime(date).getNormalized()}\")}`;
  }





}
