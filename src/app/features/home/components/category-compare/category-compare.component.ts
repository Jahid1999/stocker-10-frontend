import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DataCompareService } from './data-compare.service';
import { DataCompare } from './data.model';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  xaxis: ApexXAxis,
  yaxis:ApexYAxis
  stroke: ApexStroke,
  fill: ApexFill,
  legend: ApexLegend
};

@Component({
  selector: 'app-category-compare',
  templateUrl: './category-compare.component.html',
  styleUrls: ['./category-compare.component.scss']
})
export class CategoryCompareComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  public apiVal:DataCompare[] = [];

  public todayDatas:number[] = [];
  public yesterdayDatas:number[] = [];
  public categories:string[] = [];
  public todayParcentages:number[] = [];

  public subOff$ = new Subject()

  constructor(private service:DataCompareService) { }

  ngOnInit(): void {
    this.service.getCompareData().pipe(takeUntil(this.subOff$))
    .subscribe(res=>{
      this.apiVal = res;
      this.initializeData();
      this.graphInitialise();
    })

  }
  graphInitialise() {
    this.chartOptions = {
      series: [
        {
          name: "Todays",
          data: this.todayDatas,
        },
        {
          name: "Yesterdays",
          data: this.yesterdayDatas
        }
      ],
      chart: {
        type: "bar",
        height: 1000
      },
      legend: {
        markers: {
          fillColors: ['#285e33', '#5e2828']
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
          barHeight:'90px'
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: 50,
        style: {
          fontSize: "12px",
          colors: ["#00"],
          fontFamily : 'Roboto, Helvetica Neue, sans-serif'
        },
        // formatter: function(val, opts?) {
        //   if(opts.seriesIndex == 0){
        //     return val + ''
        //   }
        //   else return ""
        // },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.categories,
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontFamily: 'Roboto, Helvetica Neue, sans-serif'
          }
        }
      },
      fill: {
        colors: ['#285e33', '#5e2828']
      },
    };
  }

  initializeData(){
    for(let obj of this.apiVal){
      this.todayDatas.push(obj["Todays_Value"]);
      this.yesterdayDatas.push(obj["Yesterdays_Value"])
      this.categories.push(obj["Category"])
      this.todayParcentages.push(obj["Todays_percentage"])
    }
  }

}
