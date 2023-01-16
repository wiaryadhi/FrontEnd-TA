import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { IUsers, IUsersWrapper } from '../interfaces/i-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint:string="api/user"

  constructor(private baseService:BaseService, private httpClient:HttpClient) { }

  all():Observable<IUsersWrapper>{
    return this.httpClient.get<IUsersWrapper>(
      `${this.baseService.baseURL}${this.endpoint}/all`
    )
  }

  create(user:IUsers):Observable<IUsers>{
    const headers = {
      'Content-Type':'application/json'
    };

    const body = JSON.stringify(user);

    return this.httpClient.post<IUsers>(
      `${this.baseService.baseURL}${this.endpoint}`,
      body,
      {headers}
    );
  }

  update(user:IUsers):Observable<IUsers>{
    const headers= {
      'Content-type':'application/json'
    };

    const body = JSON.stringify(user);

    return this.httpClient.put<IUsers>(
      `${this.baseService.baseURL}${this.endpoint}/update`,
      body,
      {headers}
    );
  }

  updateFlag(user:IUsers, id:number):Observable<IUsers>{
    const headers= {
      'Content-type':'application/json'
    };

    const body = JSON.stringify(user);

    return this.httpClient.put<IUsers>(
      `${this.baseService.baseURL}${this.endpoint}/update`,
      body,
      {headers}
    );
  }
}
