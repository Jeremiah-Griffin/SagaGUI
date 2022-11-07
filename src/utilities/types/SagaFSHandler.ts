import {invoke} from "@tauri-apps/api/tauri";
import {Injectable} from "@angular/core";

@Injectable()
export class SagaFSHandlerService{

  async fetchParent(path: string): Promise<[string, Array<string>, Array<string>]>{

    let res: [string, Array<string>, Array<string>] = ["", [], []]
    try{
      res = await invoke("plugin:fs|fetch_parent",{path: path})
    }
    catch (error) {

      window.alert(error)
    }
    return res;
  }


  async fetchChildren(path: string): Promise<[Array<string>, Array<string>]>{


    let res: [Array<string>, Array<string>] = [[], []]

    try{
      res = await invoke("plugin:fs|fetch_children",{path: path})
    }
    catch (error) {

      window.alert(error)
    }
    return res;
  }



}
