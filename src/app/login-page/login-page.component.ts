import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ILogin, ILoginToken} from "../interfaces/i-login";
import {LoginService} from "../services/login.service";
import {StorageService} from "../services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {ILoginWrapper} from "../interfaces/i-user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements AfterViewInit, OnInit {

  lastURL: string | null = null;
  defaultURL: string = "/dashboard";
  requiredForm: FormGroup;

  messageError: string = "";

  user: ILogin = {
    uniqId: "",
    password: ""
  };

  public context: CanvasRenderingContext2D | null;

  @ViewChild("myCanvas")
  myCanvas!: ElementRef<HTMLCanvasElement>;

  captchaCode: string = "";
  captchaInput: string = "";

  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private router: Router,
              private fb: FormBuilder) {
    this.requiredForm = new FormGroup({
      uniqId: new FormControl(this.user.uniqId, [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(5)
      ])
    })
    this.context = null
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(() => new Error('Something Bad Happen'))
  }

  onLogin() {
    if (this.captchaCode === this.captchaInput) {
      this.user = this.requiredForm.value
      this.loginService.login(this.user)
        .subscribe(
          (response: ILoginWrapper) => {
            this.storageService.save('UNIQID', response.data.uniqId);
            this.storageService.save('MSISDN', `${response.data.msisdn}`);
            if (this.lastURL) {
              this.router.navigate(             [this.lastURL])
            } else {
              this.router.navigate([this.defaultURL])

            }

          }, error => {
            console.log(error.message);
            alert("LOGIN GAGAL, USERNAME ATAU PASSWORD SALAH")
            this.messageError = error.message;
          }
        )
    }
     else {
      alert("captcha salah")
    }
  }

  ngAfterViewInit(): void {
    this.captchaCode = this.getCaptcha();
    let element = this.myCanvas.nativeElement;
    this.context = element.getContext("2d");
    this.context!.fillStyle = "white";
    this.context!.font = "bold 48px Arial";
    this.context!.fillText(this.captchaCode, 60, 80);
  }

  getCaptcha(length: number = 6): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result;
  }

  // verifyCaptcha() {
  //   if (this.captchaCode === this.captchaInput) {
  //     alert("sukses");
  //   } else {
  //     alert("captcha salah")
  //   }
  // }

  ngOnInit(): void {
    this.captchaCode = this.getCaptcha();

  }

}
