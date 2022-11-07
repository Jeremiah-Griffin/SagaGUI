import {Component, OnInit} from "@angular/core";


enum QueryModes{
  Native,
  FullFrame,
}
@Component({
  selector: "right-panel-lens-query",
  templateUrl: "lens-query.component.html",
  styleUrls: ["lens-query.component.scss"],
})
export class LensQueryComponent implements OnInit{
  queryMode: QueryModes = QueryModes.Native;
  modesModelNames: Array<[QueryModes, string]> = [[QueryModes.Native, "Native"], [QueryModes.FullFrame, "35mm"]];

  nativeWideLengths: Array<number> = [];
  nativeNormalLengths: Array<number> = [];
  nativeTelephotoLengths: Array<number> = [];
  fullFrameWideLengths: Array<number> = [];
  fullFrameNormalLengths: Array<number> = [];
  fullFrameTelephotoLengths: Array<number> = [];

  nativeLengthSelections: Array<any>;
  fullFrameLengthSelections: Array<any>;

  constructor() {
    this.nativeLengthSelections = [];
    this.fullFrameLengthSelections = [];
  }

  async ngOnInit() {
    [
      this.nativeWideLengths,
      this.nativeNormalLengths,
      this.nativeTelephotoLengths,
      this.fullFrameWideLengths,
      this.fullFrameNormalLengths,
      this.fullFrameTelephotoLengths,
    ] = await globalThis.db_connection.submitLensCardInitializationQuery();
  }

  nativeSelected(): boolean{
    return this.queryMode === QueryModes.Native
  }

  fullFrameSelected(): boolean{
    return this.queryMode === QueryModes.FullFrame
  }

  //TODO this should prolly be split into two functions but im exhausted.
  async submitLensQuery(){
    try{
      await globalThis.db_connection.submitQueryToCenterPanel(this.buildLensQuery())

    }
    catch (error){
      window.alert(error)
    }
  }

  private buildLensQuery():string {

    let units: Array<string> = [];

    switch (this.queryMode){
      case QueryModes.Native:{

        let count: number = 0;

        for (let len of this.nativeLengthSelections){
          units.push(`{get_field_equals(FocalLength::${len.toString()})}`)
        }

        count++;

        break;
      }

      case QueryModes.FullFrame:{

        let iterations: number = 0;

        for (let len of this.fullFrameLengthSelections){
          units.push(`{get_field_equals(FocalLengthIn35mmFilm::${len.toString()})}`)
        }

        iterations++;

        break;
      }

    }
    return units.join("+")
  }
}
