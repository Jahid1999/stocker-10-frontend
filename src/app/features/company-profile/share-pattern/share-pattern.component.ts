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
import {ActivatedRoute, Router} from "@angular/router";
import {SharePatternService} from "./service/share-pattern.service";

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
  public company_code:any;
  public pieChartSeriesList:any = [];
  public pieChartLabelsList:any = [];
  public govt:any = [];
  public foreign:any = [];
  public institute:any = [];
  public public:any = [];
  public sponsorDirector:any = [];
  public monthList:any = [];
  public dataLoaded = false;
  public lineGraphData = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _sharePatternService: SharePatternService
  ) {}

  getSharePatternData() {
    let array = [];
    this._sharePatternService.getSharePattern(this.company_code).subscribe(
      (response: any) => {
        array = [...response];
        console.log(array);
        this.setLineChart(array);
        this.setPieChart(array);
      },
      (error) => {
        console.log('error = ', error);
      }
    );
  }

  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.getSharePatternData();
  }
  setLineChart(array:any){
    array.reverse().forEach((item:any)=>{
      const month = item['ShareHoldingPercentage'].split(" ")[0];
      const year = item['ShareHoldingPercentage'].split(" ")[2];
      console.log(month+" "+year);
      this.govt.push(item['Govt']);
      this.foreign.push(item['Foreign']);
      this.institute.push(item['Institute']);
      this.public.push(item['Public']);
      this.sponsorDirector.push(item['SponsorDirector']);
      this.monthList.push(month+" "+year);
    });
    this.lineGraphData = true;
    this.lineGraph = {
      //"Foreign","Government","Institute", "Public Share","Directors",
      series: [
        {
          name: "Foreign",
          data: this.foreign,
        },
        {
          name: "Government",
          data: this.govt,
        },
        {
          name: "Institute",
          data: this.institute,
        },
        {
          name: "Public Share",
          data: this.public,
        },
        {
          name: "Directors",
          data: this.sponsorDirector,
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
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
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: this.monthList
      },
      yaxis: {
        title: {
          text: "Share (Percentage)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      grid: {
        borderColor: "#f1f1f1"
      },
      colors:['#7FBCD2', '#FECD70', '#94B49F', '#FFC4C4','#645CAA'],
    };
  }

  setPieChart(array:any){
    this.pieChartSeriesList.push(array[0]['Foreign']);
    this.pieChartSeriesList.push(array[0]['Govt']);
    this.pieChartSeriesList.push(array[0]['Institute']);
    this.pieChartSeriesList.push(array[0]['Public']);
    this.pieChartSeriesList.push(array[0]['SponsorDirector']);
    this.dataLoaded = true;
    this.pieChartOptions = {
      series:this.pieChartSeriesList,
      chart: {
        type: "donut",
        height: 350,
        width:350,
        stacked: true,
      },
      labels: [ "Foreign","Government","Institute", "Public Share","Directors",],
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
      colors:['#7FBCD2', '#FECD70', '#94B49F', '#FFC4C4','#645CAA'],
      fill: {
        colors:['#7FBCD2', '#FECD70', '#94B49F', '#FFC4C4','#645CAA'],
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
/*  setNewChartData(){
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
      },
      colors:['#7FBCD2', '#FECD70', '#94B49F', '#FFC4C4','#645CAA'],
      fill: {
        colors:['#7FBCD2', '#FECD70', '#94B49F', '#FFC4C4','#645CAA'],
      },
    };
  }*/

}
