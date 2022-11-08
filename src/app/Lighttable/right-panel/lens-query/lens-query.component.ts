import {Component, OnInit} from "@angular/core";


@Component({
  selector: "right-panel-lens-query",
  templateUrl: "lens-query.component.html",
  styleUrls: ["lens-query.component.scss"],
})
export class LensQueryComponent implements OnInit{


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



  async submitNativeQuery(){
    let units = [];
    for (let len of this.nativeLengthSelections){
      units.push(`{get_field_equals(FocalLength::${len.toString()})}`)
    }

    let query = units.join("+");

    try{
      await globalThis.db_connection.submitQueryToCenterPanel(query)

    }
    catch (error){
      window.alert(error)
    }


  }

  async submit35mmQuery(){
    let units = [];

    for (let len of this.fullFrameLengthSelections){
      units.push(`{get_field_equals(FocalLengthIn35mmFilm::${len.toString()})}`);
    }

    let query = units.join("+");

    try{
      await globalThis.db_connection.submitQueryToCenterPanel(query)

    }
    catch (error){
      window.alert(error)
    }

  }
}
