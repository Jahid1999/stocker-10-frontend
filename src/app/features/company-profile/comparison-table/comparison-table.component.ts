import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from 'src/api-endpoints';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss'],
})
export class ComparisonTableComponent implements OnInit {
  public company_name: string = '';
  public full_name: string = '';
  dtOptions: DataTables.Settings = {};
  private _jsonURL = `${apiEndpoints.baseURL}/market_category/`;
  private _jsonURL_tis = `${apiEndpoints.baseURL}/technical_indicators_staticis/`;

  emailFormControl = new FormControl();
  public search: string = '';
  public modalData: any = [];
  public searchedItems: any = [];
  public mainData: any = [];
  public load: boolean = false;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  addClicked() {
    // console.log('kfrb');
  }

  ngOnInit(): void {
    this.company_name = this.activatedRoute.snapshot.params['company-name'];
    this.full_name = this.activatedRoute.snapshot.params['full-name'];
    this._jsonURL = this._jsonURL + this.company_name;
    let temp = this._jsonURL_tis + this.company_name;
    this.http.get(this._jsonURL).subscribe((res) => {
      this.modalData = res;
      this.searchedItems = res;
    });
    this.http.get(temp).subscribe((res: any) => {
      res.unshift({
        name: 'Company Name',
        value: this.full_name,
      });
      this.mainData.push(res);
    });
  }

  addCompany(data: any) {
    let temp = this._jsonURL_tis + data.Short_name;
    this.load = true;
    this.http.get(temp).subscribe((res: any) => {
      res.unshift({
        name: 'Company Name',
        value: data.Full_name,
      });
      this.mainData.push(res);
      this.load = false;
    });
  }

  searchCompany() {
    // console.log(this.search)
    this.searchedItems = [];
    if (this.search === '') {
      this.searchedItems = this.modalData;
      return;
    }
    this.modalData.forEach((data: any) => {
      if (data.Full_name.toLowerCase().includes(this.search.toLowerCase())) {
        this.searchedItems.push(data);
      }
    });
  }
}
