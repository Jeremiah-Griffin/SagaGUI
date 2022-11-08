import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutomateComponent} from "./automate.component";
import {MatCardModule} from "@angular/material/card";
import { ImportCardComponent } from './import-card/import-card.component';

@NgModule({
  declarations: [
    AutomateComponent,
    ImportCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})

export class AutomateModule { }
