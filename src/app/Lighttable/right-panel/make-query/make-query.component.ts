import {Component, OnInit} from "@angular/core";

@Component({
  selector: "right-panel-make-query",
  templateUrl: "make-query.component.html",
  styleUrls: ["make-query.component.scss"],
})
export class MakeQueryComponent implements OnInit{
  models: Array<string>;
  //[make, model]
  selectionsModel: Array<string>;

  constructor() {
    this.models = [];
    this.selectionsModel = [];
  }

  async ngOnInit() {

    this.models = await globalThis.db_connection.submitMakePanelInitializationQuery();

  }


  async submitMakeQuery() {
    await globalThis.db_connection.submitQueryToCenterPanel(this.buildQuery())
  }

  buildQuery(): string{

    let queries: Array<string> = [];

    for (let model of this.models){

      let query = `{get_field_equals(Model::${model})}`;

      queries.push(query);
    }
    return queries.join("+")
  }
}
