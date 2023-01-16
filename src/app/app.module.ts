import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReportPageComponent} from './report-page/report-page.component';
import {NgxPrintModule} from "ngx-print";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPageComponent } from './user-page/user-page.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    ReportPageComponent,
    LoginPageComponent,
    SidebarComponent,
    UserPageComponent
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
    HttpClientModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
