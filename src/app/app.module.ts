import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {ReportPageComponent} from './report-page/report-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import {FormsModule} from "@angular/forms";
import {NgxPrintModule} from "ngx-print";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReportPageComponent,
    LoginPageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
