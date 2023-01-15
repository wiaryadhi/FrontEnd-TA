import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {formatDate} from "@angular/common";
import jsPDF from "jspdf";
import {IReport, IReportWrapper} from "../interfaces/i-report";
import {ReportService} from "../services/report.service";

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})

export class ReportPageComponent implements OnInit {

  reports: Array<IReport> = [];

  reportFilter: Array<IReport> = [];

  report: IReport = {} as IReport;

  colGroup = ''
  tgl = ''

  constructor(
    private reportService: ReportService
  ) {   }

  ngOnInit(): void {
    this.onAll()
  }

  onAll(): void{
    this.reportService.all().subscribe(
      (response: IReportWrapper) => {
        let tempData = response.data;
        this.reports = tempData
        this.reportFilter = [...new Map(tempData.map(item => [item['coveran'], item])).values()]
      }
    );
  }

  onFilter(cg: string, dt: string){
    this.reportList = this.reportList.filter( item => item.collectorgroup === cg && item.tanggal == dt
    )
    console.log(this.reportList)
  }

  currentDate = new Date()
  cdv = formatDate(this.currentDate, 'yyyy-MM-dd hh:mm:ss', 'en-US');

  title = 'Report Aging';
  fileName= 'ReportAging_'+this.cdv+'.xlsx';
  reportList = [

    {
      "no": 1,
      "name": "Leanne Graham",
      "account": "99042958498983",
      "address": "jayapura",
      "postalcode" : "12345",
      "collectorgroup" : "group 1",
      "tanggal" : "20/02/2022",
      "field" : "djalfk",
      "kelompok" : "satu"
    },
    {
      "no": 2,
      "name": "fdsfsf",
      "account": "342545422134",
      "address": "jakarta",
      "postalcode" : "42323",
      "collectorgroup" : "group 2",
      "tanggal" : "20/12/2012",
      "field" : "djalfk",
      "kelompok" : "dua"
    }
  ]

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
