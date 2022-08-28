import { Component, OnInit,Input  } from '@angular/core';
import { Subject ,Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss']
})
export class ComparisonTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  private _jsonURL = 'http://20.42.24.211/api/technical_indicators_staticis/'
  column = [{
    title: 'NAME',
    data: 'Name'
  }, {
    title: 'VALUE',
    data: 'value'
  }, {
    title: 'INTERPRETATION',
    data: 'Interpretation'
  },{
    title: 'VERDICT',
    data: 'verdict'
  }
 ]
  // dataAvail = true
  // @Input() public tec_indctrs: any;
  data = [{
    "Name":"SMA",
    "value": 10.07,
    "Interpretation": "oversold",
    "verdict": "Buy"
},{
  "Name":"MACD",
    "value": 0.05,
    "Interpretation": "bearish",
    "verdict": "sell/neutral"
},{
  "Name":"RSI",
    "value": 58.79,
    "Interpretation": "compare",
    "verdict": "sell"
},{
  "Name":"STOC",
    "value": 0.39,
    "Interpretation": "oversold",
    "verdict": "Buy"
}];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.dtOptions = {
      searching:false,
      lengthChange:false,
      paging : false,
      info: false,
      responsive: true,
      language: {
        paginate:{next: ">",last:"Last",first:"First",previous:"<"}
      },
      pageLength: 8,
      columnDefs:[{ "width": "30em", "targets":  [0,1,2,3]},{"name":'some name',"targets":0},{"orderable":true,"targets":[0,1]}],
       data:this.data,
       columns: this.column
    };
  }

}
