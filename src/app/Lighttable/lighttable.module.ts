import {CenterPanelComponent} from "./center-panel/center-panel.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LighttableComponent} from "./lighttable.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {ImagePaneModule} from "./center-panel/image-pane/image-pane.module";
import {LighttableRightPanel} from "./right-panel/right-panel.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {LighttableLeftPanel} from "./left-panel/left-panel.module";


@NgModule({
  declarations: [
    CenterPanelComponent,
    LighttableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    ImagePaneModule,
    LighttableRightPanel,
    LighttableLeftPanel,
    MatSidenavModule,
    MatDatepickerModule,
    MatRadioModule,
  ],
  bootstrap: [LighttableComponent],
  exports:[
    LighttableComponent,
  ]
})

export class LighttableModule {}
