import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
// import { NgxDatatableService } from './ngx-datatable.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  rows: any = [];  
  totalCount: Number = 0;  
  closeResult: string | any;  
  dataParams: any = {  
    page_num: '',  
    page_size: ''  
  };  
  
  constructor(  
    private ngxDatatableService: TableService  
  ) { }  
  
  ngOnInit() {  
    this.dataParams.page_num = 1;  
    this.dataParams.page_size = 20;  
    this.getAllHeroList();  
  }  
  
  
  getAllHeroList() {  
    this.rows = this.ngxDatatableService.hero_pages;  
    this.totalCount = this.ngxDatatableService.total_count;  
  }  

}
