import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseURL:string="http://192.168.137.147:4200/api"

  constructor() { }
}
