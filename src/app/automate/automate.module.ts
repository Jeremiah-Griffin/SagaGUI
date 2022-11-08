import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutomateComponent} from "./automate.component";
import {MatCardModule} from "@angular/material/card";
import { ImportCardComponent } from './import-card/import-card.component';
import { ExportCardComponent } from './export-card/export-card.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AutomateComponent,
    ImportCardComponent,
    ExportCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class AutomateModule { }
