import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill
} from "ng-apexcharts";
import { Subject,takeUntil  } from "rxjs";
import { TodayData } from "src/app/shared/models/Today-data-bar-model";
import { DataService } from "src/app/services/data-service.service";

export type ChartOptions = {
  series: ApexAxisChartSeries|any;
  chart: ApexChart|any;
  dataLabels: ApexDataLabels|any;
  plotOptions: ApexPlotOptions|any;
  xaxis: ApexXAxis|any;
  fill: ApexFill | any;
};
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent|any;
  public chartOptions!: Partial<ChartOptions>;
  public data:TodayData[] = []
  public subOff$ = new Subject()
  public catgoriesArray: string[] = [];
  public dataArray: number[] = [];
  public descriptionArray:string[] = [];
  constructor(private service:DataService) {
    
  }
  ngOnDestroy(): void {
    this.subOff$.next(1)
    this.subOff$.complete()
  }
  ngOnInit(): void {
    this.service.recieveTodayData().pipe(takeUntil(this.subOff$))
    .subscribe({
      next:res=>{
        this.data = res;
        this.data.sort((a, b) => parseFloat(b.Value) - parseFloat(a.Value));
        let description:string;
        for (let x in this.data){
          this.catgoriesArray.push(this.data[x].Category);
          this.dataArray.push(Number(this.data[x].Value));
          description = '('+this.data[x].Percentage+')';
          this.descriptionArray.push(description);
        }
        // for (let x in this.descriptionArray){
        //   this.chartOptions.series[x].name = this.descriptionArray[x];
        // }

        this.chartOptions = {
          series: [
                {
                  name: 'Value',
                  data:this.dataArray      
                }
          ],
          chart: {
            type: "bar",
            height: 550
          },
          
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top'
              }
            }
          },
          // dataLabels: {
          //   enabled: true,
          //   textAnchor: "start",
          //   style: {
          //     colors: ["#333"]
          //   },
          //   formatter: function(val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
          //     console.log(val);
          //     return  val+' '+ opt.dataPointIndex;
          //   },
          //   offsetX: 0,
          //   dropShadow: {
          //     enabled: true
          //   }
          // },
          fill: {
            opacity: 1,
            colors:['#285e33'],
          },
         
          dataLabels: {
            enabled: true,
            style: {
              colors: ['#333']
            },
            offsetX: 40
          },
         
          xaxis: {
            categories: this.catgoriesArray,
            lines: {
              show: false,
            }
          },
  
        };
        // this.chartOptions.xaxis.categories = 
        // console.log(this.chartOptions.xaxis.categories);
      }
    })
   
  }
}