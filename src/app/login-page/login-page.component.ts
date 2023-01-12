import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements AfterViewInit, OnInit {
  public context: CanvasRenderingContext2D | null;

  @ViewChild("myCanvas")
  myCanvas!: ElementRef<HTMLCanvasElement>;

  captchaCode: string = "";
  captchaInput: string = "";

constructor() {
  this.context = null
}

  ngAfterViewInit(): void {
    this.captchaCode = this.getCaptcha();
    let element = this.myCanvas.nativeElement;
    this.context = element.getContext("2d");
    this.context!.fillStyle = "white";
    this.context!.font = "bold 48px Arial";
    console.log(this.captchaCode);
    this.context!.fillText(this.captchaCode,  60, 80);
  }

  getCaptcha(length: number = 6): string{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random()* charactersLength))
    }
    return result;
  }

  verifyCaptcha(){
    if (this.captchaCode === this.captchaInput){
      alert("sukses");
    } else  {
      alert("captcha salah")
    }
  }

  ngOnInit(): void {
  this.captchaCode = this.getCaptcha();
  }

}

let username:any = document.getElementById("uname");
let password:any = document.getElementById("passwd");
let alertLogin:any = document.getElementById("alertLogin");
let btnLogin = document.querySelector("#btnLogin");

username?.addEventListener("change", (e: any) => {
  username = e.target.value;
  console.log(username);
});

password?.addEventListener("change", (e: any) => {
  password = e.target.value;
});

btnLogin?.addEventListener("click", (e: any) => {
  if(username == "arya" && password == "pass") {
    alertLogin.innerHTML = `Login berhasil! Selamat datang ${username}!`
  } else {
    alertLogin.innerHTML = `Login Gagal, Username / Password salah & tidak boleh kosong!`
  }
})

