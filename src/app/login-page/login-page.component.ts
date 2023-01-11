import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

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
