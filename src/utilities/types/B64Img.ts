import {Injectable} from "@angular/core";


@Injectable()
export class B64Img{
  img: string;
  mimeType: string;


  constructor(buf: String) {
    this.mimeType = 'jpg'
    this.img = buf.toString();
  }
  getString(){
    let img = 'data:image/' + this.mimeType + ';base64,' + this.img;
    console.log(img);

    return img
  }

}

