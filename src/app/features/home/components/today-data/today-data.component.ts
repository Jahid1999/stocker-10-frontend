import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill
} from "ng-apexcharts";
import { Subject, takeUntil } from "rxjs";
import { TodayData } from "./Today-data-bar-model";
import { DataService } from "./data-service.service";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
};
@Component({
  selector: 'app-today-data',
  templateUrl: './today-data.component.html',
  styleUrls: ['./today-data.component.scss']
})
export class TodayDataComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | any;
  @Input() todaysDataFromParent: TodayData[] | any ;
  
  public chartOptions!: Partial<ChartOptions>;
  public data: TodayData[] = []
  public subOff$ = new Subject()
  public catgoriesArray: string[] = [];
  public dataArray: number[] = [];
  public descriptionArray: string[] = [];
  constructor(private service: DataService) {

  }
  ngOnDestroy(): void {
    this.subOff$.next(1)
    this.subOff$.complete()
  }
  ngOnInit(): void {
    // this.service.recieveTodayData().pipe(takeUntil(this.subOff$))
    //   .subscribe({
    //     next: res => {
    //       this.data = res;
    //       this.data.sort((a, b) => parseFloat(b.Value) - parseFloat(a.Value));
    //       this.initializeData();
    //       this.setChart();
    //     }
    //   })

      this.data = this.todaysDataFromParent ;
      this.data.sort((a, b) => parseFloat(b.Value) - parseFloat(a.Value));
      this.initializeData();
      this.setChart();

  }
  initializeData() {
    let description: string;
    for (let x in this.data) {
      this.catgoriesArray.push(this.data[x].Category);
      this.dataArray.push(Number(this.data[x].Value));
      description = '(' + this.data[x].Percentage + ')';
      this.descriptionArray.push(description);
    }
  }
  setChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Value',
          data: this.dataArray
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
      fill: {
        opacity: 1,
        colors: ['#285e33'],
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
  }

}
