import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutomateComponent} from "./automate.component";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AutomateComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AutomateModule { }
