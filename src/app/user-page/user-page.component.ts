import { Component, OnInit } from '@angular/core';
import { IUsers, IUsersWrapper } from '../interfaces/i-users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users:Array<IUsers>=[];

  ngOnInit(): void {
    this.onAll();
  }

  constructor(private userService:UserService){}

  onAll():void{
    this.userService.all()
    .subscribe(
      (response:IUsersWrapper)=>{
        this.users=response.data
      }
    )
  }

}
