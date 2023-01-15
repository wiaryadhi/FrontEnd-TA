import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportPageComponent } from './report-page/report-page.component';
import {FormsModule} from "@angular/forms";
import {NgxPrintModule} from "ngx-print";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ReportPageComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
      NgxPrintModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
