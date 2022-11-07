import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {pictureDir} from "@tauri-apps/api/path";

@Component({
  selector: 'left-panel-commit-card',
  templateUrl: './commit-card.component.html',
  styleUrls: ['./commit-card.component.scss']
})
export class CommitCardComponent implements OnInit {

  //these are the private internal state of the module.
  //When sending a request to read the children of a folder
  //or a selection, these are always used.
  current_directory: string = "";
  child_directories: Array<string> = [];
  child_files: Array<string> = [];

  //These are the truncated variants of the above suitable
  //for display in the application.
  display_directories: Array<[string, number]>;
  display_files: Array<[string, number]>;

  //ngmodel state
  fileNameSelections: Array<string>;
  constructor() {
    this.fileNameSelections = [];

    this.display_directories = [];
    this.display_files = [];

  }

  async ngOnInit() {
    this.current_directory = await pictureDir();
    await this.fetchChildren(this.current_directory);
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
    for (let dir of this.child_directories){
      dirs.push([this.truncate(dir), counter])
      counter++
    }

    counter = 0;
    for (let file of this.child_files){
      files.push([this.truncate(file), counter])
      counter++
    }

    this.display_directories = dirs;
    this.display_files = files;


  }



  async fetchChildren(dir: string){

    let prev_dir = this.current_directory;
    try{
      [this.child_directories, this.child_files] = await globalThis.fs_handler.fetchChildren(dir);

      this.current_directory = dir;

     this.construct_shortened_paths();


    }
    catch(error){
      window.alert(error)
      await this.fetchChildren(prev_dir)
    }
  }

  async fetchParent(dir: string){

    let prev_dir = this.current_directory;
    try {
      [this.current_directory, this.child_directories, this.child_files] = await globalThis.fs_handler.fetchParent(dir);

      this.construct_shortened_paths();
    }

    catch (error){
      window.alert(error)
      await this.fetchChildren(prev_dir)
    }
  }

  buildFullPath(path: string){
    return `${this.current_directory}\\${path}`
  }



  async submitCommitOp(){

    let full_paths = [];

    for (let fileName of this.child_files){
      full_paths.push(this.buildFullPath(fileName));
    }

    await globalThis.db_connection.commitObjects(full_paths);

  }


}
