import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
   
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.dataSource = demoData;
  }
  getPDF(){
    const pdfUrl ="src/app/features/company-profile/reports/104017.pdf";
    const pdfName = 'your_pdf_file.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
