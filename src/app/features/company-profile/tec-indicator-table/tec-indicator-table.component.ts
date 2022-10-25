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
              data =
                '<span title="' +
                'hello ' +
                row.interpretation +
                '">' +
                data +
                '</span>';
              // if(row.interpretation=="bearish"){
              //   data = '<span title="'+"hello bearish"+'">'+ data +'</span>';
              // }
              // else if(row.interpretation=="compare"){
              //   data = '<span title="'+"hello compare"+'">'+ data +'</span>';
              // }
              // else if(row.interpretation=="oversold"){
              //   data = '<span title="'+"hello oversold"+'">'+ data +'</span>';
              // }
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
