import {Component} from "@angular/core";
import {B64Img} from "../../../../utilities/types/B64Img";

@Component({
  selector: 'ligthttable-image-pane',
  templateUrl: 'image-pane.component.html',
  styleUrls: ['image-pane.component.scss'],
  providers: []
})

export class ImagePaneComponent{

  img!: B64Img;
  metadata!: Array<string>;

}


