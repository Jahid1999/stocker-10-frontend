import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from 'src/api-endpoints';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss'],
})
export class ComparisonTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  private _jsonURL = `${apiEndpoints.baseURL}/technical_indicators_staticis/`;
  emailFormControl = new FormControl();
  public search: string='';

  constructor(private http: HttpClient) {}
  addClicked() {
    console.log('kfrb');
  }

  ngOnInit(): void {

  }
  searchCompany(){

  }
}
