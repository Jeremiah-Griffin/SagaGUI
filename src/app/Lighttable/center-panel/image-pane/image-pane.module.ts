import {NgModule, Provider} from "@angular/core";
import {MetadataCardComponent} from "./metadata-card/metadata-card.component";
import {ImageCardComponent} from "./image-card/image-card.component";
import {ImagePaneComponent} from "./image-pane.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    MetadataCardComponent,
    ImageCardComponent,
    ImagePaneComponent,
  ],
  bootstrap: [ImagePaneComponent],
  imports: [
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    ImagePaneComponent,
  ],
})

export class ImagePaneModule {


}
