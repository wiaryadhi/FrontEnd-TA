import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IUsers, IUsersWrapper } from '../interfaces/i-users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users:Array<IUsers>=[];
  
  // passwordInput:any= document.querySelector("#password");
  // reInput:any= document.querySelector("#retype-password");
  reInput: string = "";
  notif: any = {
    uniqId:null,
    collectName:null,
    type:null,
    title:null,
    coveran:null,
    phoneNumber:null,
    password: null,
    reInput: null
  }

  @Input() user:IUsers = {cms:false, mobile:false} as IUsers;

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

  onCreate():void{
    this.resetNotif();
    if(!this.user.uniqId){
      this.notif.uniqId = "NIP harus di isi";
    }

    else if(!this.user.collectName){
      this.notif.collectName = "Nama harus di isi";
    }

    else if(!this.user.type){
      this.notif.type = "Type harus di isi";
    }

    else if(!this.user.title){
      this.notif.title = "Title harus di isi";
    }

    else if(!this.user.coveran){
      this.notif.title = "Coveran harus di isi";
    }

    else if(!this.user.phoneNumber){
      this.notif.title = "Nomor Handphone harus di isi";
    }

    else if(this.user.password){
      if(this.user.password==this.reInput){
        this.userService.create(this.user)
        .subscribe(
          (response:IUsers)=>{
            this.user={} as IUsers;
            this.onAll()
          }
          )
          alert("Data berhasil ditambahkan")
        } else {
          
          this.notif.reInput = "Password harus sama";
      }
      
    } else {
      this.notif.password = "Password harus di isi";
    }
 
  }

  setUser(user:IUsers){
    this.user=JSON.parse(JSON.stringify(user))
  }

  setUserEmpty(){
    this.user={id:0} as IUsers;
  }

  onUpdate():void{
    this.userService.update(this.user)
    .subscribe(
      (response:IUsers)=>{
        this.user={} as IUsers;
        this.onAll()
      }
    )
    alert("Data berhasil Diubah")
  }

  onCmsEnable(id:number):void{
    this.user={id:id, cms:true} as IUsers;
    this.userService.update(this.user)
    .subscribe(
      (response:IUsers)=>{
        this.user={} as IUsers;
        this.onAll()
      }
    )
  }

  onCmsDisable(id:number):void{
    this.user={id:id, cms:false} as IUsers;
    this.userService.update(this.user)
    .subscribe(
      (response:IUsers)=>{
        this.user={} as IUsers;
        this.onAll()
      }
    )
  }

  onMobileEnable(id:number):void{
    this.user={id:id, mobile:true} as IUsers;
    this.userService.update(this.user)
    .subscribe(
      (response:IUsers)=>{
        this.user={} as IUsers;
        this.onAll()
      }
    )
  }

  resetNotif(): void {
    this.notif = {
    uniqId:null,
    collectName:null,
    type:null,
    title:null,
    coveran:null,
    phoneNumber:null,
    password: null,
    reInput: null
    }
  }

  onMobileDisable(id:number):void{
    this.user={id:id, mobile:false} as IUsers;
    this.userService.update(this.user)
    .subscribe(
      (response:IUsers)=>{
        this.user={} as IUsers;
        this.onAll()
      }
    )
  }

  onDelete(id:number):void{
    this.user={id:id, active:false} as IUsers;
    this.userService.update(this.user)
    .subscribe(
      (response:IUsers)=>{
        this.user={} as IUsers;
        this.onAll()
      }
    )
  }

}
