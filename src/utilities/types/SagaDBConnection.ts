import {B64Img} from "./B64Img";
import {EventEmitter, Injectable} from "@angular/core";
import {invoke} from '@tauri-apps/api/tauri';

export class ImagePaneState {

  img: B64Img;
  metadata: Array<string>;

  constructor(buf: string, metadata: Array<string>){
    this.img = new B64Img(buf);

    this.metadata = metadata;
  }

}

@Injectable()
export class SagaDBConnectionService{

  result: EventEmitter<Array<BigInt>>;

  constructor() {
    this.result = new EventEmitter;
  }


  //initialization queries

  async submitCollectionsCardInitializationQuery(): Promise<Array<string>>{
    let buf = new Array<string>;

    try{
      let result = await invoke('plugin:netcode|submit_collections_card_init_query');
      Object.assign(buf, result);
    }
    catch(error){
      window.alert(error)
    }

    return buf

  }
  async submitMakePanelInitializationQuery(): Promise<Array<string>>{
    let buf = new Array<string>;
    try {
      let result = await invoke('plugin:netcode|submit_make_panel_init_query');
      Object.assign(buf, result)
    }
    catch(error){
      window.alert(error);
    }
    return buf
  }
  async submitLensCardInitializationQuery(): Promise<Array<Array<number>>>{
    let buf: Array<Array<number>> = [];
    try {
      let res = await invoke("plugin:netcode|submit_lens_panel_init_query");
      Object.assign(buf, res);
    }
    catch(error){
      window.alert(error);
    }
    return buf
  }

  //everything else
  async submitQueryToSelf(query: string): Promise<Array<string>> {
    let items: Array<string> = [];
    try {
      let res = await invoke('plugin:netcode|submit_query', {query: query});

      if (typeof res==="string"){
        let buf = JSON.parse(res);

        if ((buf.length === 2) && (buf[0] < 9)) {

          let err_code = buf[0];
          let err_msg = buf[1];

          switch (err_code){
            case BigInt(0):
              window.alert(err_msg)

              break;
            case BigInt(1):
              window.alert(err_msg)

              break;
            default:
              window.alert('unknown error code ' + '"' + err_code + '"' + ' encountered.' )
              break;
          }
        }
        else{
          for (let res of buf){
            items.push(res)
          }
        }
      }

    }
    catch(error) {
      window.alert(error)
    }
    return items
  }
  async submitQueryToCenterPanel(query: string){
    let strings = await this.submitQueryToSelf(query);
    let hashes: Array<BigInt> = [];

    for (let string of strings){
      hashes.push(BigInt(string))
    }

    this.result.emit(hashes)
  }

  async retrieveThumbnail(hash: BigInt): Promise<[string, Array<string>]>{
    return await invoke('plugin:netcode|retrieve_thumbnail', {hash: hash.toString()})
  }
  async commitObjects(paths: Array<string>): Promise<Array<string>>{
    let hashes: Array<string> =  [];
    try{
      let res: Array<string> = await invoke('plugin:netcode|commit_objects', {inputDirectories: paths});

      //Display these images to the center panel.
      //This must loop through the DB connection to
      //execute any workflows and synchronize state.
      //We can't use JSON stringify because it doesn't support BigInt
      await this.submitQueryToCenterPanel(`{echo("[${res}]")}`)

      hashes = res
    }
    catch (error){
      window.alert(error)
    }

    return hashes
  };

}
