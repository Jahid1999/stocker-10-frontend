import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartService } from './services/chart.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-trade-stat-barchart',
  templateUrl: './trade-stat-barchart.component.html',
  styleUrls: ['./trade-stat-barchart.component.scss']
})
export class TradeStatBarchartComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  dataAvailable = false;
  tradeStatData: Number[] = [];
  tradeStatDataLabel !: any;
  today!: Date;
  public chartOptions!: Partial<ChartOptions> | any;
  isBarChart:boolean = true;

  constructor(private chartServices:ChartService) {}

  ngOnInit(): void {
      this.loadData();
      this.setChart();
  }

  loadData(){
    this.chartServices.getTradeStatBarchartData().subscribe((data:any)=>{
      console.log(data)
      this.tradeStatDataLabel = data;
      this.tradeStatData.push(data.unchanged);
      this.tradeStatData.push(data.up);
      this.tradeStatData.push(data.down);
      this.dataAvailable = true;
      this.today = new Date();
      console.log(data)
    })
  }

  setChart(){
    this.chartOptions = {
      series: [
        {
          name: "Trade Statistics",
          data: this.tradeStatData
        }
      ],
      chart: {
        height: 350,
        width:350,
        stacked: true,
        type: "bar"
      },
      plotOptions: {
        bar: {
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          bottom: 0,
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      fill: {
        colors:['#0e274d', '#164d22', '#5c020b'],
      },
      legend: {
        show: false
      },
      xaxis: {

        categories: [
          "Flat",
          "Up",
          "Down",
        ],
      },

    };
  }
  toggleChart(){
    this.isBarChart = !this.isBarChart;
  }
}
