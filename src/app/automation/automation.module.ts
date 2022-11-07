import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationComponent } from './automation.component';
import {MatCardModule} from "@angular/material/card";
import { ImportCardComponent } from './import-card/import-card.component';
import { ExportCardComponent } from './export-card/export-card.component';
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    AutomationComponent,
    ImportCardComponent,
    ExportCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class AutomationModule { }
