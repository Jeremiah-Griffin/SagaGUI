import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationComponent } from './automation.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {ImportCardComponent} from "./import-card/import-card.component";
import {ExportCardComponent} from "./export-card/export-card.component";



@NgModule({
  declarations: [
    ImportCardComponent,
    ExportCardComponent,
    AutomationComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    AutomationComponent,
  ],
})
export class AutomationModule { }
