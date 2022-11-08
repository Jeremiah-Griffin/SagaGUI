import {Component, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";

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

  importWorkflowEmitter: EventEmitter<string> = new EventEmitter;

  constructor() {

  }

  saveWorkflow(){

    let query =
      [
        this.selectedDirective,
        this.selectedNoun.value,
        `{${this.selectedStatement}(${this.selectedTag.value}::${this.selectedField.value})}`
      ].join(" ");

    window.alert(query)

  }

}
