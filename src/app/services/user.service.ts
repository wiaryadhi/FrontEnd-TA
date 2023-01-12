import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { IUsersWrapper } from '../interfaces/i-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint:string="/user/all"

  constructor(private baseService:BaseService, private httpClient:HttpClient) { }

  all():Observable<IUsersWrapper>{
    return this.httpClient.get<IUsersWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`
    )
  }
}
