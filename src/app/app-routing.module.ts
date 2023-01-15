import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'side', component: SidebarComponent, canActivate: [AuthGuardService]},

  {path: '', redirectTo: 'login', pathMatch: "full"}]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
