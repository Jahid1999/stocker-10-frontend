import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NewsService} from "../news/news.service";
import {ActivatedRoute} from "@angular/router";
declare var require: any
const FileSaver = require('file-saver');
const demoData= [
  {quartarly: 'orionpharm-2017-2018-q1'},
  {quartarly: 'orionpharm-2017-2018-q1'}
];
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = ['quartarly','anual'];
  dataSource: any;
  public company_code: string='';
  public allReports: any = [];


  constructor(private service:NewsService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.dataSource = demoData;
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.service.getNewsData(this.company_code).subscribe((res:any)=>{
      this.allReports = res['reports'];
    })
  }
  getPDF(link: string,title: string){
    const pdfUrl ="src/app/features/company-profile/reports/104017.pdf";
    const pdfName = title+'_pdf_file.pdf';
    FileSaver.saveAs(link, pdfName);
  }
}
