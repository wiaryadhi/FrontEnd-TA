import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import {FormsModule} from "@angular/forms";
import {NgxPrintModule} from "ngx-print";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ReportPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
