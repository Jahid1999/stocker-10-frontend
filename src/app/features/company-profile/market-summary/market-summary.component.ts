import {Component, OnInit, ViewChild} from '@angular/core';
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
  ApexLegend,ApexTooltip,
} from "ng-apexcharts";
import { dataSeries } from "./data-series";

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
  selector: 'app-market-summary',
  templateUrl: './market-summary.component.html',
  styleUrls: ['./market-summary.component.scss']
})
export class MarketSummaryComponent implements OnInit {

  constructor() { }

  @ViewChild("chart") chart : ChartComponent|any;
  public lineGraph : Partial<ChartOptions>|any;
  slide:any = 0;
  id= '0'
  marketSummary:any= {};

  ngOnInit(): void {
    this.setLineChart();
    this.loadData();
  }

  loadData(){
    this.marketSummary = {
      prevClose: 134,
      open: 143,
      daysRange: '130-150.12',
      q1Eps:14.13,
      q2Eps: 13.14,
      q3Eps: 14.13,
      q4Eps: 0,
      authorizedCapital: 100,

      mccap: 1025,
      volume: 140,
      halfReturn: 3.32,
      fullReturn: 2.63,
      lastAgm: '25-07-2022',
      listed: 2021,
      category: 'A',
      creditRating: 'N/A',
      shares:14131314,
      paidUpCap: 50
    }
  }
  setLineChart(){
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.lineGraph = {
      series: [
        {
          name: "Price",
          data: dates
        }
      ],
      chart: {
        height: 350,
        type: "area",
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors:['#4287f5'],
        width: 2,
      },

      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      yaxis: {
        labels: {
          formatter: function (val:any) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
      },
      fill: {
        colors: ['#4287f5'],
        type: 'gradient',
        gradient: {

          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: .6,
          stops: [0, 90, 100]
        },
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }

  next(){
    if(this.slide <1) this.slide++
  }

  previous(){
    if(this.slide>0) this.slide--;
  }
}
