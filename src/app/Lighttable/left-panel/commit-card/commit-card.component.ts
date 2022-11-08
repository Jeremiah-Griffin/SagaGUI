import {Component,OnInit} from '@angular/core';
import {pictureDir} from "@tauri-apps/api/path";
import {WorkflowService} from "../../../../utilities/services/WorkflowService";

@Component({
  selector: 'left-panel-commit-card',
  templateUrl: './commit-card.component.html',
  styleUrls: ['./commit-card.component.scss']
})
export class CommitCardComponent implements OnInit {

  //these are the private internal state of the module.
  //When sending a request to read the children of a folder
  //or a selection, these are always used.
  currentDirectory: string = "";
  childDirectories: Array<string> = [];
  childFiles: Array<string> = [];
  importWorkflow: Array<string> = [];

  //These are the truncated variants of the above suitable
  //for display in the application.
  displayDirectories: Array<[string, number]>;
  displayFiles: Array<[string, number]>;

  //ngmodel state
  fileNameSelections: Array<string>;
  constructor(private workFlowService: WorkflowService) {
    this.fileNameSelections = [];
    this.displayDirectories = [];
    this.displayFiles = [];

    workFlowService.newImportWorkflow$.subscribe(
      workflow =>{
        this.importWorkflow.push(workflow)
      }
    )
  }

  async ngOnInit() {
    this.currentDirectory = await pictureDir();
    await this.fetchChildren(this.currentDirectory);
  }


  private truncate(input: string): string{

    let output = input;

    let length = input.length;

    if (length > 25){
      let truncated: string = output.substring(length - 25,length);

      output = "..." + truncated;
    }

    return output
  }
  private construct_shortened_paths(){

    let dirs: Array<[string, number]> = [];
    let files: Array<[string, number]> = [];

    let counter = 0;
    for (let dir of this.childDirectories){
      dirs.push([this.truncate(dir), counter])
      counter++
    }

    counter = 0;
    for (let file of this.childFiles){
      files.push([this.truncate(file), counter])
      counter++
    }

    this.displayDirectories = dirs;
    this.displayFiles = files;
  }



  async fetchChildren(dir: string){

    let prev_dir = this.currentDirectory;
    try{
      [this.childDirectories, this.childFiles] = await globalThis.fs_handler.fetchChildren(dir);

      this.currentDirectory = dir;

     this.construct_shortened_paths();


    }
    catch(error){
      window.alert(error)
      await this.fetchChildren(prev_dir)
    }
  }

  async fetchParent(dir: string){

    let prev_dir = this.currentDirectory;
    try {
      [this.currentDirectory, this.childDirectories, this.childFiles] = await globalThis.fs_handler.fetchParent(dir);

      this.construct_shortened_paths();
    }

    catch (error){
      window.alert(error)
      await this.fetchChildren(prev_dir)
    }
  }

  buildFullPath(path: string){
    return `${this.currentDirectory}\\${path}`
  }



  async submitCommitOp(){

    let full_paths = [];

    for (let fileName of this.childFiles){
      full_paths.push(this.buildFullPath(fileName));
    }

    await globalThis.db_connection.commitObjects(full_paths);

    for (let workflow of this.importWorkflow){
      window.alert(workflow)
      await globalThis.db_connection.submitQueryToSelf(workflow);
    }
  }

}
