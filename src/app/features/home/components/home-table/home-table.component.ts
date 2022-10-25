import { Component, OnInit } from '@angular/core';
import { Subject, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from 'src/api-endpoints';

class Info {
  trading_code: string;
  ltp: number;
  closep: number;
  change: number;
  ycp: number;

  constructor() {
    this.trading_code = '';
    this.ltp = 0;
    this.closep = 0;
    this.change = 0;
    this.ycp = 0;
  }
}

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  private _jsonURL = `${apiEndpoints.baseURL}/home_company_data/`;
  dataAvail = true;
  public spinner: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      language: {
        paginate: { next: '>', last: 'Last', first: 'First', previous: '<' },
        searchPlaceholder:"Search",
        search:""
      },
      pageLength: 8,
      columnDefs: [
        { width: '30em', targets: [0, 1, 2, 3, 4] },
        { name: 'some name', targets: 0 },
        { orderable: true, targets: [0, 1] },
      ],
      //  data:[{"trading_code":"First Janata Bank Mutual Fund","ltp":6.2,"closep":6.2,"change":-0.1,"ycp":6.3},{"trading_code":"Prime Finance First Mutual Fund","ltp":17.2,"closep":17.2,"change":-0.1,"ycp":17.3},{"trading_code":"aamra networks limited","ltp":39,"closep":39,"change":0.3,"ycp":38.7},{"trading_code":"aamra technologies limited","ltp":35.8,"closep":35.8,"change":0.2,"ycp":35.6},{"trading_code":"AB Bank 1st Mutual fund","ltp":5.6,"closep":5.6,"change":0,"ycp":5.6},{"trading_code":"AB Bank Limited","ltp":10,"closep":10,"change":0,"ycp":10},{"trading_code":"Aman Cotton Fibrous Limited","ltp":27.7,"closep":27.7,"change":-0.3,"ycp":28},{"trading_code":"ACI  Limited","ltp":278.3,"closep":278.3,"change":3,"ycp":275.3}],
      columns: [
        {
          title: 'CODE',
          data: 'trading_code',
          render: function (data, type, row, meta) {
            row.trading_code = row.trading_code.replace(/ /g, '-');
            if (type === 'display') {
              if (row.change < 0) {
                data =
                  '<a style="color:red;" href="' +
                  row.scrip +
                  '/' +
                  row.trading_code +
                  '">' +
                  data +
                  '</a>';
              } else if (row.change == 0) {
                data =
                  '<a style="color:#2a76e8;" href="' +
                  row.scrip +
                  '/' +
                  row.trading_code +
                  '">' +
                  data +
                  '</a>';
              } else {
                data =
                  '<a style="color:green;" href="' +
                  row.scrip +
                  '/' +
                  row.trading_code +
                  '">' +
                  data +
                  '</a>';
              }
            }

            return data;
          },
        },
        {
          title: 'LTP',
          data: 'ltp',
        },
        {
          title: 'CLOSEP',
          data: 'closep',
        },
        {
          title: 'CHANGE',
          data: 'change',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              if (row.change < 0) {
                data = '<span style="color:red;">' + data + '</span>';
              } else if (row.change == 0) {
                data = '<span style="color:#2a76e8;">' + data + '</span>';
              } else {
                data = '<span style="color:green;">' + data + '</span>';
              }
            }

            return data;
          },
        },
        {
          title: 'YCP',
          data: 'ycp',
        },
      ],
    };

    this.getJSON().subscribe((data) => {
      // console.log(data);
      data = data.filter(function (dat: any) {
        return dat.trading_code != '';
      });
      this.spinner = false;
      this.dtOptions.data = data;
      this.dataAvail = true;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get<any>(this._jsonURL);
  }
}
