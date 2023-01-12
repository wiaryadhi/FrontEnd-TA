import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportPageComponent } from './report-page/report-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";
import {NgxPrintModule} from "ngx-print";

@NgModule({
  declarations: [
    AppComponent,
    ReportPageComponent,
    SidebarComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
      NgxPrintModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
