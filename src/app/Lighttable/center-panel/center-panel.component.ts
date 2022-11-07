import { Component,  ViewChild, ViewContainerRef} from "@angular/core";
import {FormControl} from "@angular/forms";
import {ImagePaneComponent} from "./image-pane/image-pane.component";
import {ImagePaneState} from "../../../utilities/types/SagaDBConnection";


@Component({
  selector: 'lighttable-center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.scss'],
  providers: []
})

export class CenterPanelComponent{

  queryFormControl: FormControl;
  StateInstances: Array<ImagePaneState>;
  hashes: Array<BigInt>;
  sagaDBSubscription: any;

  @ViewChild('imgPaneHost', {read: ViewContainerRef})
  container!: ViewContainerRef;

  constructor(){
    this.queryFormControl = new FormControl('');
    this.StateInstances = [];
    this.hashes = [];
    this.sagaDBSubscription = globalThis.db_connection.result.subscribe(

      //next
      async (result) => {
        this.container.clear();
        this.StateInstances = [];

        this.hashes = result;

        for (let hash of this.hashes) {

          let res = await globalThis.db_connection.retrieveThumbnail(hash);

          let img = res[0];
          let metadata= res[1];

          this.StateInstances.push(new ImagePaneState(img, metadata))
        }

        for (let state of this.StateInstances) {
          const ref = this.container.createComponent(ImagePaneComponent)
          ref.instance.img = state.img;
          ref.instance.metadata = state.metadata;
        }

      }
    );
  }

  async handleQuerySubmit(){
    let queryInput = this.queryFormControl.getRawValue();
    this.hashes = [];
    this.StateInstances = [];
    this.queryFormControl.reset();
    this.container.clear();

    await globalThis.db_connection.submitQueryToCenterPanel(queryInput);

  }
}
