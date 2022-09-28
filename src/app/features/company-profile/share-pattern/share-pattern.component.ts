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
  selector: 'app-share-pattern',
  templateUrl: './share-pattern.component.html',
  styleUrls: ['./share-pattern.component.scss']
})
export class SharePatternComponent implements OnInit {
  @ViewChild("chart") chart : ChartComponent|any;
  public lineGraph : Partial<ChartOptions>|any;
  public pieChartOptions!: Partial<ChartOptions> | any;

  constructor() {

  }

  ngOnInit(): void {
    this.setNewChartData();
    this.setPieChart();
  }
  setPieChart(){
    this.pieChartOptions = {
      series: [123.42,80.34,91,101,76],
      chart: {
        type: "donut",
        height: 350,
        width:350,
        stacked: true,
      },
      labels: [ "Flat","Up","Down"],
      dataLabels: {
        enabled: true,
        formatter: function (val:any) {
          return val.toFixed(2) + "%"
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      legend:{
        show:false,
      },
      colors:['#0e274d', '#164d22', '#5c020b', '#C61C1C','#1CC674'],
      fill: {
        colors:['#0e274d', '#164d22', '#5c020b', '#C61C1C','#1CC674'],
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
  setNewChartData(){
    this.lineGraph = {
      series: [
        {
          name: "Government",
          data: [30, 27, 14, 44, 31, 21, 67, 15, 9, 2, 55, 19]
        },
        {
          name: "Institute",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Foreign",
          data: [76, 12, 28, 64, 63, 76, 22, 53, 1, 9, 25, 88]
        },
        {
          name: "Directors",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Public Share",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val: string, opts: { w: { globals: { series: { [x: string]: { [x: string]: string; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val: any) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function(val: any) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }

}