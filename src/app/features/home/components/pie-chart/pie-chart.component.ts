import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import {ChartService} from "../trade-stat-barchart/services/chart.service";
import {ChartModel} from "../../../../models/trade-state-chart.model";

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
  today!: Date;
  chartModel!: ChartModel;

  constructor(private chartServices:ChartService) {}
  ngOnInit() {
    this.loadChart();
  }
  setChart(){
    this.chartOptions = {
      series: [this.chartModel.unchanged, this.chartModel.up, this.chartModel.down],
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
  loadChart(){
    this.chartServices.getTradeStatBarchartData().subscribe((data:any)=>{
      this.chartModel.unchanged = data.unchanged;
      this.chartModel.up = data.up;
      this.chartModel.down = data.down;
      this.today = new Date();
      console.log(this.chartModel);
      this.setChart();
    })
  }
}
