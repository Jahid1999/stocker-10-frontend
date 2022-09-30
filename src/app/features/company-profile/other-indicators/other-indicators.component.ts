import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-other-indicators',
  templateUrl: './other-indicators.component.html',
  styleUrls: ['./other-indicators.component.scss']
})
export class OtherIndicatorsComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { }

  ngOnInit(): void {
    this.setBarChartData();
  }

  setBarChartData(){
    this.chartOptions = {
      title: {
        text: "Other Indicators (Ratio)"
      },
      colors:['#285E33', '#5E2828', '#284E5E'],
      series: [
        {
          name: "DIVIDENT YIELD",
          data: [4.4, 5.5, 5.7, 5.6, 6.1]
        },
        {
          name: "PE RATIO",
          data: [5.5, 3.5, 4.9, 7, 7.6]
        },
        {
          name: "MACD",
          data: [7.1, 4.1, 3.6, 2.6, 4.5]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          borderRadius: 2,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2017",
          "2018",
          "2019",
          "2020",
          "2021"
        ]
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: any) {
            return  val ;
          }
        }
      },
      legend:{
        position: 'top'
      }
    };
  }

}
