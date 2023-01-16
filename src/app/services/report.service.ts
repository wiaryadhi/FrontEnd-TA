import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {IReport, IReportWrapper} from "../interfaces/i-report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  endpoint: string = "account/for/report/all"

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) { }

  all(): Observable<IReportWrapper>{
    return this.httpClient.get<IReportWrapper>(
        `${this.baseService.baseURL}${this.endpoint}`

    )
  }

  getFilter(cover: string, tgl: string): Observable<IReportWrapper>{
    return this.httpClient.get<IReportWrapper>(
      `${this.baseService.baseURL}/account/for/report?coveran=${cover}&agingdate=${tgl}`

    )
  }
}
