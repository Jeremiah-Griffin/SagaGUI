import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'right-panel-collections-card',
  templateUrl: './collections-card.component.html',
  styleUrls: ['./collections-card.component.scss']
})
export class CollectionsCardComponent implements OnInit {
  collections: Array<string>;
  collectionSelection: Array<string>;
  newCollectionName: string;

  constructor() {
    this.collections = [];
    this.collectionSelection = [];
    this.newCollectionName = "";
  }

  async ngOnInit(): Promise<void> {
    this.collections = await globalThis.db_connection.submitCollectionsCardInitializationQuery();
  }

  async submitCollectionsQuery(){

    let query = `{get_collection(${this.collectionSelection[0]})}`

    try{
      await globalThis.db_connection.submitQueryToCenterPanel(query);
    }
    catch(error){
      window.alert(error)
    }

  }

  async submitCreateCollectionDirective(){
    let query = `create_collection ${this.newCollectionName} {echo([])}`
    await globalThis.db_connection.submitQueryToSelf(query);

    await this.ngOnInit();

  }

}
