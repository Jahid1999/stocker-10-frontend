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
  dataReady = false;
  date: any = [];
  obv: any[][] = [];
  closing_price: any[][] = [];
  buy: any[][] = [];
  sell: any[][] = [];

  constructor(private router: ActivatedRoute, private http: HttpClient,
  ) {
  }

  getData() {
    return this.http.get(apiEndpoints.baseURL + '/prediction/' + this.company_name + '/30/');
  }


  ngOnInit(): void {
    this.company_name = this.router.snapshot.params['company-name'];
    this.getData().subscribe((data: any) => {
      for(let i=0;i<30;i++){
        this.obv.push([data.days[i],data.obv[i]])
        this.closing_price.push([data.days[i],data.closing_price[i]])
        let b =  data.sigPriceBuy[i] === -1 ? 0 : parseInt(data.sigPriceBuy[i])*10000;
        let s =  data.sigPriceSell[i] === -1 ? 0 : parseInt(data.sigPriceSell[i])*(-10000);
        this.buy.push([data.days[i],b])
        this.sell.push([data.days[i],s])
      }
      this.setOscillatorChart(this.obv,this.closing_price,this.buy,this.sell)
      this.dataReady = true

    })
  }


  setOscillatorChart(obv: any,closing_price: any,buy: any,sell: any) {
    this.oscillatorChart = {
      series: [
        {
          name: "Buying Point",
          type:"bar",
          data: buy
        },
        {
          name: "Selling Point",
          type:"bar",
          data: sell
        },
        {
          name: "OBV",
          type: "line",
          data: obv,
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
        text: "Prediction Graph (30-day period)",
        align: "center"
      },
      stroke: {
        width: [1,1,3,3],
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
      colors:['#0a6b15','#ff0000','#4287f5','#fc7b03'],
      xaxis: {
        type: "datetime",
        // categories: this.date.slice(2)
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
