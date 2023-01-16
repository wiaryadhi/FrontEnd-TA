import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {ReportPageComponent} from './report-page/report-page.component';
import {NgxPrintModule} from "ngx-print";

@NgModule({
  declarations: [
    AppComponent,
    ReportPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxPrintModule,
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
