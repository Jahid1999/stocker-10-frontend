import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from 'src/api-endpoints';

@Component({
  selector: 'app-tec-indicator-table',
  templateUrl: './tec-indicator-table.component.html',
  styleUrls: ['./tec-indicator-table.component.scss'],
})
export class TecIndicatorTableComponent implements OnInit {
  private company_name = this.route.snapshot.paramMap.get('company-name');

  dtOptions: DataTables.Settings = {};
  private _jsonURL = `${apiEndpoints.baseURL}/technical_indicators_staticis/`;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let company_name = this.route.snapshot.paramMap.get('company-name');
    this._jsonURL = this._jsonURL + company_name;
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
      //  data:this.tec_indctrs,
      columns: [
        {
          title: 'NAME',
          data: 'name',
        },
        {
          title: 'VALUE',
          data: 'value',
        },
        {
          title: 'INTERPRETATION',
          data: 'interpretation',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              if (data.toLowerCase() == 'bearish') {
                data =
                  '<span title="' +
                  "'Bearish Trend' in financial markets can be defined as a downward trend in the prices of an industry's stocks or the overall fall in broad market indices" +
                  '">' +
                  data +
                  '</span>';
              } else if (data.toLowerCase() == 'bullish') {
                data =
                  '<span title="' +
                  "'Bullish Trend' is an upward trend in the prices of an industry's stocks or the overall rise in broad market indices, characterized by high investor confidence." +
                  '">' +
                  data +
                  '</span>';
              } else if (data.toLowerCase() == 'overbought') {
                data =
                  '<span title="' +
                  "'Overbought' is a term used when a security is believed to be trading at a level above its intrinsic or fair value. Overbought generally describes recent or short-term movement in the price of the security, and reflects an expectation that the market will correct the price in the near future" +
                  '">' +
                  data +
                  '</span>';
              } else if (data.toLowerCase() == 'oversold') {
                data =
                  '<span title="' +
                  "The term 'Oversold' refers to a condition where an asset has traded lower in price and has the potential for a price bounce. An oversold condition can last for a long time, and therefore being oversold doesn't mean a price rally will come soon, or at all." +
                  '">' +
                  data +
                  '</span>';
              } else if (data.toLowerCase() == 'neutral') {
                data =
                  '<span title="' +
                  "The term 'Neutral' is used to describe a situation where there is no clear trend in the market. This is a situation where the market is neither bullish nor bearish." +
                  '">' +
                  data +
                  '</span>';
              }
            }

            return data;
          },
        },
        {
          title: 'VERDICT',
          data: 'verdict',
        },
      ],
    };
    this.getJSON().subscribe((data) => {
      //  data = data.filter(function(dat:any){return dat.trading_code!="";})
      this.dtOptions.data = data;
      // console.log(data)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get<any>(this._jsonURL);
  }

  navigateToGraphPage() {
    let fullname = this.route.snapshot.params['full-name'];
    this.router.navigateByUrl(`profile/${this.company_name}/${fullname}/graph`);
  }
}
