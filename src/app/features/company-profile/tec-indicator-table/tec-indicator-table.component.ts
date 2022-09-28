import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from 'src/environments/environment';
@Component({
  selector: 'app-tec-indicator-table',
  templateUrl: './tec-indicator-table.component.html',
  styleUrls: ['./tec-indicator-table.component.scss'],
})
export class TecIndicatorTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  private _jsonURL = `${apiEndpoints.baseURL}/technical_indicators_staticis/`;
  // dataAvail = true
  // @Input() public tec_indctrs: any;
  tec_indctrs = [
    {
      Name: 'SMA',
      value: 10.07,
      Interpretation: 'oversold',
      verdict: 'Buy',
    },
    {
      Name: 'MACD',
      value: 0.05,
      Interpretation: 'bearish',
      verdict: 'sell/neutral',
    },
    {
      Name: 'RSI',
      value: 58.79,
      Interpretation: 'compare',
      verdict: 'sell',
    },
    {
      Name: 'STOC',
      value: 0.39,
      Interpretation: 'oversold',
      verdict: 'Buy',
    },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      searching: false,
      lengthChange: false,
      paging: false,
      info: false,
      responsive: true,
      language: {
        paginate: { next: '>', last: 'Last', first: 'First', previous: '<' },
      },
      pageLength: 8,
      columnDefs: [
        { width: '30em', targets: [0, 1, 2, 3] },
        { name: 'some name', targets: 0 },
        { orderable: true, targets: [0, 1] },
      ],
      data: this.tec_indctrs,
      columns: [
        {
          title: 'NAME',
          data: 'Name',
        },
        {
          title: 'VALUE',
          data: 'value',
        },
        {
          title: 'INTERPRETATION',
          data: 'Interpretation',
        },
        {
          title: 'VERDICT',
          data: 'verdict',
        },
      ],
    };
    // this.getJSON().subscribe(data => {
    //  data = data.filter(function(dat:any){return dat.trading_code!="";})
    //  this.dtOptions.data = data

    //   // this.dataAvail = true
    //  });
  }

  // public getJSON(): Observable<any> {
  //   return this.http.get<any>(this._jsonURL);
  //  }
}
