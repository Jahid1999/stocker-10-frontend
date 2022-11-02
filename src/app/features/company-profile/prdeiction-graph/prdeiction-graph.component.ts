import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexFill,
  ApexLegend, ApexTooltip

} from "ng-apexcharts";
import {apiEndpoints} from "../../../../api-endpoints";
import {HttpClient} from "@angular/common/http";
import {Points} from "@syncfusion/ej2-angular-charts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: ApexTooltip; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-prdeiction-graph',
  templateUrl: './prdeiction-graph.component.html',
  styleUrls: ['./prdeiction-graph.component.scss']
})
export class PrdeictionGraphComponent implements OnInit {

  public company_name: string = '';
  public oscillatorChart: Partial<ChartOptions> | any;
  public obvChart: Partial<ChartOptions> | any;
  dataReady = false;
  date: any = [];
  obv: any[][] = [];
  obv_ema: any[][] = [];
  closing_price: any[][] = [];
  buy: any[][] = [];
  sell: any[][] = [];
  min_price = 270;
  max_price = 290;


  constructor(private router: ActivatedRoute, private http: HttpClient,
  ) {
  }

  getData() {
    return this.http.get(apiEndpoints.baseURL + '/prediction/' + this.company_name + '/30/');
  }


  ngOnInit()
    :
    void {
    this.company_name = this.router.snapshot.params['company-name'];
    this.getData().subscribe((data: any) => {
      this.min_price = Math.min(...data.closing_price) - 5;
      this.max_price = Math.max(...data.closing_price) + 5;
      for (let i = 0; i < 30; i++) {
        this.obv.push([data.days[i], data.obv[i]])
        this.obv_ema.push([data.days[i], data.obv_ema[i]])
        this.closing_price.push([data.days[i], data.closing_price[i]])
        let b = data.sigPriceBuy[i] === -1 ? 0 : parseInt(data.sigPriceBuy[i]);
        let s = data.sigPriceSell[i] === -1 ? 0 : parseInt(data.sigPriceSell[i]);
        //if(b!==0){
          this.buy.push([data.days[i], b])
        // }
        // if(s!==0){
          this.sell.push([data.days[i], s])

        //}

      }
      this.setOscillatorChart(this.obv, this.closing_price, this.buy, this.sell, this.obv_ema)
      this.dataReady = true

    })
  }


  setOscillatorChart(obv
                       :
                       any, closing_price
                       :
                       any, buy
                       :
                       any, sell
                       :
                       any, obv_ema
                       :
                       any
  ) {
    this.oscillatorChart = {
      series: [
        {
          name: "Buying Point",
          type: "area",
          data: buy
        },
        {
          name: "Selling Point",
          type: "area",
          data: sell
        },
        {
          name: "Closing Price",
          type: "line",
          data: closing_price,
        },
      ],
      chart: {
        id: 'gv',
        height: 350,
        //width: 720
      },
      title: {
        text: "Closing Price (30-day period)",
        align: "center"
      },
      stroke: {
        width: [1, 1, 2],
        curve: 'smooth'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        markers: {
          width: 40,
          height: 8,
          radius: 0,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          series: [
            {
              data: buy
            },
            {
              data: sell
            },
          ]
        }
      },
      colors: ['#0a6b15', '#ff0000', '#daf456'],
      xaxis: {
        type: "datetime",
        categories: this.date.slice(2)
      },
      yaxis: [{
        min: this.min_price,
        max: this.max_price,
        labels: {
          formatter: function (val: any) {
            if (val) return val.toFixed(2)
          }
        },
        tooltip: {
          enabled: true
        }
      }],
    }
    this.obvChart = {
      series: [
        {
          name: "OBV",
          type: "line",
          data: obv,
        },
        {
          name: "OBV EMA",
          type: "line",
          data: obv_ema,
        },
      ],
      chart: {
        id: 'gv',
        height: 350,
        //width: 720
      },
      title: {
        text: "OBV & OBV EMA (30-day period)",
        align: "center"
      },
      stroke: {
        width: [2, 2],
        curve: 'smooth'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        markers: {
          width: 40,
          height: 8,
          strokeWidth: 0,
          radius: 0,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },

      },
      colors: ['#4287f5', '#fc7b03'],
      xaxis: {
        type: "datetime",
        categories: this.date.slice(2)
      },
      yaxis: [{
        labels: {
          formatter: function (val: any) {
            if (val) return val.toFixed(2)
          }
        },
        tooltip: {
          enabled: true
        }
      }]
    }

  }

}
