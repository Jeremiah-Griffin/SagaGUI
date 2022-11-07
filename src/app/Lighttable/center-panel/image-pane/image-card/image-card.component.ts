import {Component, Input} from "@angular/core";
import {B64Img} from "../../../../../utilities/types/B64Img";


@Component({
  selector: 'lighttable-image-card',
  templateUrl: 'image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})

export class ImageCardComponent{

@Input() img!: B64Img;

  constructor(){
  }



}
