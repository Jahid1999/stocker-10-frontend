import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexStroke,
  ApexLegend,
  ApexMarkers,
  ApexTooltip
} from "ng-apexcharts";
import { MacdService } from "./macd.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: "app-macd",
  templateUrl: "./macd.component.html",
  styleUrls: ["./macd.component.scss"]
})
export class MACDComponent implements OnInit{
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;
  public company_code: string = '';
  // public data:any[] = []
  private macdLineData:any[] = []
  public macdHistogramData:any[] = []
  private signalLineData:any[] = []


  constructor(private activatedRoute: ActivatedRoute,
    private macdService:MacdService) {

  }
  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.setData();
  }

  setData(){
    this.macdService.getMacdData(this.company_code).subscribe((response:any)=>{
      for(const key in response){
        this.macdLineData.push([Number(key), response[key][0]])
        this.signalLineData.push([Number(key), response[key][1]])
        this.macdHistogramData.push([Number(key), response[key][2]])
      }
      // console.log(this.macdHistogramData.slice(0,5))
      this.setGraphData()
    },(error) => {
      console.log("error = ",error);
    });
  }
  setGraphData() {
    this.chartOptions = {
      series: [
        {
          name: "MACD Histogram",
          type:"bar",
          // data: [23, 24, 25, 27, -13, -22, -37, -21, 22, 24, 30],
          data: this.macdHistogramData
        },
        {
          name: "MACD Line",
          type: "line",
          // data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          data:this.macdLineData
        },
        {
          name: "Signal Line",
          type: "line",
          // data: [12, 14, 5, 23, 53, 11, 9, 16, 43, 65, 24]
          data: this.signalLineData
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        // width: 650
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
      },
      stroke: {
        width: [2, 2, 2],
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
          formatter: function(y:number) {
            return y.toFixed(2) + "%";
          }
        },
        title: {
          text: 'MACD'
        },
      },
      xaxis: {
        type: "datetime",
      },
      legend:{
        // show:false
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function(y:any) {
            return y.toFixed(2);
          }
        }
      }
    };
  }
}
