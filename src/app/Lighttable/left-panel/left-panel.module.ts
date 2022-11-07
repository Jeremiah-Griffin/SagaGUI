import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitCardComponent } from './commit-card/commit-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LeftPanelComponent} from "./left-panel.component";
import {FormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    LeftPanelComponent,
    CommitCardComponent,
  ],
  exports: [
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule
  ]
})

export class LighttableLeftPanel {}
