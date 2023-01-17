import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {formatDate} from "@angular/common";
import jsPDF from "jspdf";
import {IReport, IReportWrapper} from "../interfaces/i-report";
import {ReportService} from "../services/report.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})

export class ReportPageComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  reports: Array<IReport> = [];

  reportFilter: Array<IReport> = [];
  reportss: Array<IReport> = [];

  dataNull: boolean = false
  closeBtn: boolean = false

  report: IReport = {} as IReport;

  colGroup = ''
  tgl = ''

  constructor(
    private reportService: ReportService
  ) {   }

  ngOnInit(): void {
    this.onAll()
  }

  closed(){
    this.closeBtn = false
    location.reload();
  }

  onAll(): void{
    this.reportService.all().subscribe(
      (response: IReportWrapper) => {
        let tempData = response.data;
        this.reports = tempData
        this.reportss = tempData
        this.reportFilter = [...new Map(tempData.map(item => [item['coveran'], item])).values()]
      }
    );
  }

  onFilter(cg: string, dt: string) {
    this.closeBtn = true
    this.reportService.getFilter(cg, dt).subscribe(
      (response: IReportWrapper) => {
        if (response.data.length > 0){
          this.dataNull = false
        }
        else {
          this.dataNull = true
        }
          this.tgl = ''
          this.colGroup = ''
        let tempData = response.data;
        this.reports = tempData
        this.reportss = tempData
      }
    );
  }

  currentDate = new Date()
  cdv = formatDate(this.currentDate, 'yyyy-MM-dd hh:mm:ss', 'en-US');

  fileName= 'ReportAging_'+this.cdv+'.xlsx';

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('reportTable');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  public SavePDF(): void {

    window.print()

  }


}
