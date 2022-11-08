import {NgModule} from "@angular/core";
import {LighttableModule} from "./Lighttable/lighttable.module";
import {AppComponent} from "./app.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LighttableComponent} from "./Lighttable/lighttable.component";
import {MatTabsModule} from "@angular/material/tabs";
import {AutomateComponent} from "./automate/automate.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AutomateModule} from "./automate/automate.module";


const routes: Routes = [
  { path: "lighttableRoute", component: LighttableComponent},
  { path: "automationRoute", component: AutomateComponent},
  { path: "**", redirectTo: "lighttableRoute", pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent],
    imports: [
      AutomateModule,
      LighttableModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterOutlet,
      MatToolbarModule,
      MatDividerModule,
      MatIconModule,
      MatButtonModule,
      RouterModule.forRoot(routes),
      MatTabsModule

    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
