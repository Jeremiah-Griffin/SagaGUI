import {RightPanelComponent} from "./right-panel.component";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatDatepickerModule} from "@angular/material/datepicker";
import {NgModule} from "@angular/core";
import {DateQueryComponent} from "./date-picker/date-query.component";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MakeQueryComponent} from "./make-query/make-query.component";
import {MatListModule} from "@angular/material/list";
import {LensQueryComponent} from "./lens-query/lens-query.component";
import { CollectionsCardComponent } from './collections-card/collections-card.component';
@NgModule({
  declarations: [
    RightPanelComponent,
    DateQueryComponent,
    MakeQueryComponent,
    LensQueryComponent,
    CollectionsCardComponent,
  ],
  imports: [
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    NgIf,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    JsonPipe,
    ReactiveFormsModule,
    NgForOf,
  ],
  bootstrap: [RightPanelComponent],
    exports: [
        RightPanelComponent,
        DateQueryComponent
    ],
  providers: [MatNativeDateModule]
})

export class LighttableRightPanel {}
