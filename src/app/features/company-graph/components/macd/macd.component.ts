import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexStroke,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: "app-macd",
  templateUrl: "./macd.component.html",
  styleUrls: ["./macd.component.scss"]
})
export class MACDComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Red Bar",
          type:"bar",
          data: [23, 24, 25, 27, -13, -22, -37, -21, 22, 24, 30],
        },
        {
          name: "Red Line",
          type: "line",
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: "Blue Line",
          type: "line",
          data: [12, 14, 5, 23, 53, 11, 9, 16, 43, 65, 24]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width: 650
      },
      stroke: {
        width: [1, 1],
        curve: "smooth"
      },
      plotOptions: {
        bar: {
          columnWidth: "1%"
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        labels: {
          formatter: function(y) {
            return y.toFixed(0) + "%";
          }
        }
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2011-01-01",
          "2011-02-01",
          "2011-03-01",
          "2011-04-01",
          "2011-05-01",
          "2011-06-01",
          "2011-07-01",
          "2011-08-01",
          "2011-09-01",
          "2011-10-01",
          "2011-11-01",
        ],
        labels:{
          show:false
        }
      },
      legend:{
        show:false
      }
    };
  }
}
