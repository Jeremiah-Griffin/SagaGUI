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


const routes: Routes = [
  { path: "lighttable", component: LighttableComponent},
  { path: "**", redirectTo: "lighttable", pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent],
    imports: [LighttableModule,
        RouterOutlet,
        MatToolbarModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forRoot(routes), MatTabsModule

    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
