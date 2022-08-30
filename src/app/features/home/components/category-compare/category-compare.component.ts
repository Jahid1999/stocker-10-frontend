import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  ApexYAxis,
  ApexTooltip
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
  legend: ApexLegend,
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-category-compare',
  templateUrl: './category-compare.component.html',
  styleUrls: ['./category-compare.component.scss']
})
export class CategoryCompareComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  @Input() dataCompareFromParent: DataCompare[] | any ;

  public chartOptions!: ChartOptions;

  public apiVal:DataCompare[] = [];

  public todayDatas:number[] = [];
  public yesterdayDatas:number[] = [];
  public categories:string[] = [];
  public static todayParcentages:number[] = [];
  public static yesterdayParcentages:number[] = [];


  public subOff$ = new Subject()

  constructor(private service:DataCompareService) { }

  ngOnInit(): void {
    // this.service.getCompareData().pipe(takeUntil(this.subOff$))
    // .subscribe(res=>{
    //   this.apiVal = res.sort((a:DataCompare, b:DataCompare) => b.Todays_Value - a.Todays_Value);
    //   this.initializeData();
    //   this.graphInitialise();
    // })

    this.apiVal = this.dataCompareFromParent ;
    this.apiVal.sort((a, b) => b.Todays_Value - a.Todays_Value);
    // console.log(this.apiVal)
    this.initializeData();
    this.graphInitialise();
  }

  graphInitialise() {
    this.chartOptions = {
      series: [
        {
          name: "Today's",
          data: this.todayDatas,
        },
        {
          name: "Yesterday's",
          data: this.yesterdayDatas
        }
      ],
      chart: {
        type: "bar",
        height: 550,
        toolbar: {
          show: true
        },
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
          barHeight:'85'
        }
      },
      // dataLabels: {
      //   enabled: true

      // },
      dataLabels: {
        enabled: true,
        offsetX: 60,
        style: {
          fontSize: "10px",
          colors: ["#00"],
          fontFamily : 'Roboto',
        },
        formatter: function(val:number, opts?) {
          let text = '';
          if(val > opts.w.config.series[1-opts.seriesIndex].data[opts.dataPointIndex]){
            text += Math.ceil(val) + '  '
            if(opts.seriesIndex === 0){
              text += CategoryCompareComponent.todayParcentages[opts.dataPointIndex]
            }
            else{
              text += CategoryCompareComponent.yesterdayParcentages[opts.dataPointIndex]
            }
            text += '%'
          }
          return text
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          color: '#ffffff',
        },
      },
      stroke: {
        show: true,
        width: .1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.categories,
      },
      yaxis: {
        labels: {
          style: {
            fontFamily: 'Roboto, Helvetica Neue, sans-serif'
          }
        }
      },
      fill: {
        colors: ['#285e33', '#5e2828']
      },
      tooltip: {
        y: {
          // formatter: (val, opts?)=>{
          //   return val
          // },
          title: {
              formatter: (seriesName) => {
                return seriesName.slice(0,seriesName.length-2)
              },
          },
        },
      }
    };
  }

  initializeData(){
    for(let obj of this.apiVal){
      this.todayDatas.push(obj["Todays_Value"]);
      this.yesterdayDatas.push(obj["Yesterdays_Value"])
      this.categories.push(obj["Category"])
      // this.todayParcentages.push(obj["Todays_percentage"])
      CategoryCompareComponent.todayParcentages.push(obj["Todays_percentage"])
      CategoryCompareComponent.yesterdayParcentages.push(obj["Yesterdays_percentage"])
    }
  }

}
