import {Component, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";
import {WorkflowService} from "../../../utilities/services/WorkflowService";

@Component({
  selector: 'automation-import-card',
  templateUrl: './import-card.component.html',
  styleUrls: ['./import-card.component.scss']
})
export class ImportCardComponent{
  directives = globalThis.directives;
  selectedDirective: string = "";
  selectedNoun: FormControl = new FormControl("");
  selectedStatement: string = "";
  selectedTag: FormControl = new FormControl("");
  selectedField: FormControl = new FormControl("");

  queries = globalThis.queries;


  constructor(private workflowService: WorkflowService) {

  }

  saveImportWorkflow(){

    let query =
      [
        this.selectedDirective,
        this.selectedNoun.value,
        `{${this.selectedStatement}(${this.selectedTag.value}::${this.selectedField.value})}`
      ].join(" ");

    this.workflowService.emitImportWorkflow(query)


  }

}
