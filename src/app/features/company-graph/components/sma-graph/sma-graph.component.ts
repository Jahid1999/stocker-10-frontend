import { Component, OnInit, ViewChild } from '@angular/core';
import { apiEndpoints } from 'src/api-endpoints';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Observable, observable } from 'rxjs';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexDataLabels,
  ApexStroke,
} from 'ng-apexcharts';

const candleData = [
  {
    x: new Date(2016, 12, 15),
    y: [
      205.07512581368812, 205.2851151875241, 201.29491281466866,
      202.71251434662094,
    ],
  },
  {
    x: new Date(2016, 12, 18),
    y: [
      203.71007937804802, 207.38523993729632, 202.18748315917787,
      207.01770078023026,
    ],
  },
  {
    x: new Date(2016, 12, 19),
    y: [
      205.81014637496716, 207.85777378128043, 203.23754553406397,
      204.13005812571998,
    ],
  },
  {
    x: new Date(2016, 12, 20),
    y: [
      205.5476596576722, 206.7027167194763, 203.76257672150703,
      205.9151988147383,
    ],
  },
  {
    x: new Date(2016, 12, 21),
    y: [
      204.97013112677013, 208.33030762526445, 204.76008400008104,
      205.6526543445902,
    ],
  },
  {
    x: new Date(2016, 12, 22),
    y: [
      204.8126390963931, 207.38523993729632, 204.76008400008104,
      205.1801205006061,
    ],
  },
  {
    x: new Date(2016, 12, 26),
    y: [
      204.8651364398521, 206.86020874985326, 204.13005812571998,
      204.97013112677013,
    ],
  },
  {
    x: new Date(2016, 12, 27),
    y: [
      206.1776855320332, 207.33274259383737, 202.34497518955487,
      203.55258734767105,
    ],
  },
  {
    x: new Date(2016, 12, 28),
    y: [
      203.23754553406397, 206.02019350165622, 203.13255084714598,
      203.44753490789995,
    ],
  },
  {
    x: new Date(2016, 12, 29),
    y: [
      205.23261784406512, 205.23261784406512, 202.13498581571884,
      202.39747253301385,
    ],
  },
  {
    x: new Date(2017, 1, 1),
    y: [
      203.71007937804802, 204.76008400008104, 202.7650116900799,
      203.02755616022793,
    ],
  },
  {
    x: new Date(2017, 1, 2),
    y: [
      204.76008400008104, 212.11046287143077, 204.76008400008104,
      211.11289784000363,
    ],
  },
  {
    x: new Date(2017, 1, 3),
    y: [
      211.06040049654464, 218.3057846809764, 211.06040049654464,
      217.7282561500743,
    ],
  },
  {
    x: new Date(2017, 1, 4),
    y: [
      219.77582580353442, 222.03344258368367, 216.7306911186472,
      217.09823027571326,
    ],
  },
  {
    x: new Date(2017, 1, 5),
    y: [
      218.41077936789432, 218.41077936789432, 212.11046287143077,
      213.37051462015287,
    ],
  },
  {
    x: new Date(2017, 1, 8),
    y: [
      217.57076411969732, 217.57076411969732, 211.48043699706972,
      214.63062412172806,
    ],
  },
];

export const linearData: any = {
  '1483315200000': 204.926368902341,
  '1483401600000': 206.17768071929547,
  '1483488000000': 207.01772484391904,
  '1483574400000': 207.7877628851218,
  '1483833600000': 208.51404832737094,
  '1483920000000': 209.55972629815997,
  '1484006400000': 211.27918755500136,
  '1484092800000': 213.08177441839064,
  '1484179200000': 214.6393496152824,
  '1484438400000': 216.39381391383426,
  '1484524800000': 218.34953727992993,
  '1484611200000': 220.143374586076,
  '1484697600000': 221.11905128618196,
  '1484784000000': 221.41656510887617,
  '1485043200000': 222.19972748594364,
  '1485129600000': 223.35478454774776,
};
const seriesDataLinear2 = [
  {
    x: new Date(2016, 1, 1),
    y: 3.85,
  },
  {
    x: new Date(2016, 2, 1),
    y: 2.95,
  },
  {
    x: new Date(2016, 3, 1),
    y: -12.48,
  },
  {
    x: new Date(2016, 4, 1),
    y: 19.24,
  },
  {
    x: new Date(2016, 5, 1),
    y: 12.78,
  },
  {
    x: new Date(2016, 6, 1),
    y: 22.29,
  },
  {
    x: new Date(2016, 7, 1),
    y: -12.58,
  },
  {
    x: new Date(2016, 8, 1),
    y: -17.03,
  },
  {
    x: new Date(2016, 9, 1),
    y: -19.19,
  },
  {
    x: new Date(2016, 10, 1),
    y: -28.79,
  },
  {
    x: new Date(2016, 11, 1),
    y: -39.05,
  },
  {
    x: new Date(2017, 0, 1),
    y: 20.34,
  },
  {
    x: new Date(2017, 1, 1),
    y: 36.93,
  },
  {
    x: new Date(2017, 2, 1),
    y: 36.82,
  },
  {
    x: new Date(2017, 3, 1),
    y: 29.3,
  },
  {
    x: new Date(2017, 4, 1),
    y: 39.85,
  },
  {
    x: new Date(2017, 5, 1),
    y: 28.42,
  },
  {
    x: new Date(2017, 6, 1),
    y: 37.42,
  },
  {
    x: new Date(2017, 7, 1),
    y: 24.71,
  },
  {
    x: new Date(2017, 8, 1),
    y: 37.35,
  },
  {
    x: new Date(2017, 9, 1),
    y: 32.99,
  },
  {
    x: new Date(2017, 10, 1),
    y: 31.76,
  },
  {
    x: new Date(2017, 11, 1),
    y: 43.04,
  },
];
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-sma-graph',
  templateUrl: './sma-graph.component.html',
  styleUrls: ['./sma-graph.component.scss'],
})
export class SmaGraphComponent implements OnInit {
  public ready = false;
  private readyAll = false;
  private _jsonURLCandle = `${apiEndpoints.baseURL}/candle_graph/`;
  private _jsonURLSma = `${apiEndpoints.baseURL}/moving_average_graph/`;
  @ViewChild('chart') chart: ChartComponent | any;
  public chartCandleOptions: Partial<ChartOptions> | any;
  public chartBarOptions: Partial<ChartOptions> | any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let company_name = this.route.snapshot.params['company-name'];
    // this._jsonURL = this._jsonURL+company_name;
    this._jsonURLCandle = this._jsonURLCandle + company_name;
    this._jsonURLSma = this._jsonURLSma + company_name;
    this.chartCandleOptions = {
      series: [
        {
          name: 'line',
          type: 'line',
          // data: linearData
        },
        {
          name: 'candle',
          type: 'candlestick',
          data: candleData,
        },
      ],
      chart: {
        height: 450,
        type: 'line',
        // toolbar:true
      },

      title: {
        text: 'Simple moving average',
        align: 'left',
      },
      stroke: {
        width: [3, 1],
      },

      // tooltip: {
      //   shared: true,
      //   custom: [
      //     function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
      //       return w.globals.series[seriesIndex][dataPointIndex];
      //     },
      //     function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
      //       const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
      //       const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
      //       const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
      //       const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
      //       return (
      //         '<div class="apexcharts-tooltip-candlestick">' +
      //         '<div>Open: <span class="value">' +
      //         o +
      //         "</span></div>" +
      //         '<div>High: <span class="value">' +
      //         h +
      //         "</span></div>" +
      //         '<div>Low: <span class="value">' +
      //         l +
      //         "</span></div>" +
      //         '<div>Close: <span class="value">' +
      //         c +
      //         "</span></div>" +
      //         "</div>"
      //       );
      //     }
      //   ]
      // },

      // plotOptions: {
      //   candlestick: {
      //     colors: {
      //       upward: "#3C90EB",
      //       downward: "#DF7D46"
      //     }
      //   },
      //   line:{
      //     colors:"#ffffff"
      //   }
      // },
      xaxis: {
        type: 'datetime',
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
    };

    this.chartBarOptions = {
      series: [
        {
          name: 'volume',
          data: seriesDataLinear2,
        },
      ],
      // title: {
      //   text: "Volume",
      //   align: "right",
      //   floating:true
      // },
      chart: {
        // height: 160,
        type: 'bar',
        toolbar: false,
        // brush: {
        //   enabled: true,
        //   target: "candles"
        // // },
        // selection: {
        //   enabled: false,
        //   xaxis: {
        //     min: new Date("20 Jan 2017").getTime(),
        //     max: new Date("10 Dec 2017").getTime()
        //   },
        //   fill: {
        //     color: "#ccc",
        //     opacity: 0.4
        //   },
        //   stroke: {
        //     color: "#0D47A1"
        //   }
        // }
      },
      dataLabels: {
        enabled: false,
      },
      // plotOptions: {
      //   bar: {
      //     columnWidth: "80%",
      //     colors: {
      //       ranges: [
      //         {
      //           from: -1000,
      //           to: 0,
      //           color: "#F15B46"
      //         },
      //         {
      //           from: 1,
      //           to: 10000,
      //           color: "#FEB019"
      //         }
      //       ]
      //     }
      //   }
      // },
      stroke: {
        width: 0,
      },
      xaxis: {
        type: 'datetime',
        // sorted:true,
        axisBorder: {
          offsetX: 1,
        },
      },
      // tooltip: {
      //   shared: false,
      //   custom: [
      //     function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
      //       return w.globals.series[seriesIndex][dataPointIndex];
      //     },
      //     function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
      //       const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
      //       const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
      //       const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
      //       const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
      //       return (
      //         '<div class="apexcharts-tooltip-candlestick">' +
      //         '<div>Open: <span class="value">' +
      //         o +
      //         "</span></div>" +
      //         '<div>High: <span class="value">' +
      //         h +
      //         "</span></div>" +
      //         '<div>Low: <span class="value">' +
      //         l +
      //         "</span></div>" +
      //         '<div>Close: <span class="value">' +
      //         c +
      //         "</span></div>" +
      //         "</div>"
      //       );
      //     }
      //   ]
      // },
      // yaxis: {
      //   labels: {
      //     show: false
      //   }
      // }
    };

    // console.log(res)
    // this.ready = true;

    this.getJSON_sma().subscribe((data) => {
      //  data = data.filter(function(dat:any){return dat.trading_code!="";})
      let res = Object.keys(data).map((key) => ({
        x: Number(key),
        y: data[key],
      }));
      this.chartCandleOptions.series[0].data = res;
      if (this.readyAll) this.ready = true;
      this.readyAll = true;
      // console.log(res)
    });

    this.getJSON_candle().subscribe((data) => {
      //  data = data.filter(function(dat:any){return dat.trading_code!="";})
      let nData = data.map(this.dateConverter);
      this.chartCandleOptions.series[1].data = nData;
      if (this.readyAll) this.ready = true;
      this.readyAll = true;
      // console.log(this.chartCandleOptions);
    });
  }

  public getJSON_candle(): Observable<any> {
    return this.http.get<any>(this._jsonURLCandle);
  }

  public getJSON_sma(): Observable<any> {
    return this.http.get<any>(this._jsonURLSma);
  }

  public dateConverter(obj: any): any {
    let td = obj.x.split(' ');
    let date_only = td[0].split('/');
    let str =
      date_only[2] + ',' + date_only[1] + ',' + date_only[0] + ' ' + td[1];
    let obj2 = { x: str, y: obj.y };
    return obj2;
  }
}
