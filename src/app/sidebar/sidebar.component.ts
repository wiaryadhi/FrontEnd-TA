import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  reportClick : boolean = false
  isActiverep: boolean = false
  isActiverus: boolean = true

  userClick: boolean = false
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }

  userMet(){
    this.userClick = true
    this.reportClick = false
    this.isActiverus = true
    this.isActiverep = false
  }

  reportMet(){
    this.reportClick = true
    this.userClick = false
    this.isActiverus = false
    this.isActiverep = false
  }
}
