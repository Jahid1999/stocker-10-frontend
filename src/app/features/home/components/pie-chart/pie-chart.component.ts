import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  public  fetchedData:any = {
    up: 156,
    down: 133,
    unchanged: 93,
    up_percentage: 40.84,
    down_percentage: 34.82,
    unchanged_percentage: 24.35
  };
  constructor() {}
  ngOnInit() {
    this.chartOptions = {
      series: [this.fetchedData.unchanged_percentage, this.fetchedData.up_percentage, this.fetchedData.down_percentage],
      chart: {
        type: "donut"
      },
      labels: [ "Unchanged","Gainer","Loser"],
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      legend:{
        show:false,
      },
      fill: {
        opacity: 1,
        colors:['#285e33', '#284e5e', '#6a3737'],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }
      ]
    };
  }
}
