import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class WorkflowService{
  private importWorflowSource = new Subject<string>();
  private exportWorkflowSource = new Subject<string>();


  importWorkflows: Array<string> = [];
  exportWorkflows: Array<string> = [];

  constructor() {
    this.importWorflowSource.subscribe(
      workflow =>{
        this.importWorkflows.push(workflow)
      }
    )

    this.exportWorkflowSource.subscribe(
        workflow =>{
          this.exportWorkflows.push(workflow)
        }
    )
  }

  emitImportWorkflow(statement: string){
    this.importWorflowSource.next(statement);
  }

  emitExportWorkflow(statement: string){
    this.exportWorkflowSource.next(statement);
  }

  ///Gets a copy of the import workflows
  ///within the service: mutating these
  ///is safe and will never not modify the
  ///state of the service itself.
  getImportWorkflows(): Array<string>{
    let out: Array<string> = [];
    Object.assign(out, this.importWorkflows);
    return out
  }


  ///Gets a copy of the export workflows
  ///within the service: mutating these
  ///is safe and will never not modify the
  ///state of the service itself.
  getExportWorkflows(): Array<string>{

    let out: Array<string> = [];

    Object.assign(out, this.exportWorkflows);

    return out
  }
}
