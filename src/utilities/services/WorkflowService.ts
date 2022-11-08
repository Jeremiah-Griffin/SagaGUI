import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class WorkflowService{
  private importWorflowSource = new Subject<string>();
  private exportWorkflowSource = new Subject<string>();


  newImportWorkflow$ = this.importWorflowSource.asObservable();
  newExportWorkflow$ = this.exportWorkflowSource.asObservable();

  emitImportWorkflow(statement: string){
    this.importWorflowSource.next(statement);
  }

  emitExportWorkflow(statement: string){
    this.exportWorkflowSource.next(statement);
  }
}