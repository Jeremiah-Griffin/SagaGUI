import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'lighttable-metadata-card',
  templateUrl: 'metadata-card.component.html',
  styleUrls: ['metadata-card.component.scss']
})

export class MetadataCardComponent implements OnInit{
  @Input() metadata!: Array<string>;
  name: string;
  date: string;
  model: string;
  focalLength: string;
  fnumber: string;
  shutterSpeed:string;

  constructor(){
    this.name = "";
    this.date = "";
    this.model = "";
    this.focalLength = "";
    this.fnumber = "";
    this.shutterSpeed = "";
  }

  ngOnInit(){
    this.name = this.metadata[0];
    this.date = this.metadata[1];
    this.model = this.metadata[2];
    this.focalLength = this.metadata[3];
    this.fnumber = this.metadata[4];
    this.shutterSpeed = this.metadata[5];

  }

}
