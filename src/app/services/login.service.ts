import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {ILogin, ILoginToken} from "../interfaces/i-login";
import {Observable} from "rxjs";
import {ILoginWrapper, IUser} from "../interfaces/i-user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint: string = "user/login"

  constructor(private baseService: BaseService,
              private httpClient: HttpClient,
              private storageService: StorageService) {

  }

  login(loginUser: ILogin): Observable<ILoginWrapper>{
    let body = JSON.stringify(loginUser);
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.httpClient.post<ILoginWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`,
      body, {headers}
    )
  }

  isUserLoggedIn(): boolean{
    if (this.storageService.check('UNIQID')){
      return true;
    }
    return false;
  }

  logOut(): void{
    this.storageService.clear('UNIQID');
    this.storageService.clear('USERNAME')
  }
}
