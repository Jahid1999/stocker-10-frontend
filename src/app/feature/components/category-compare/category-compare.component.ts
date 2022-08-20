import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  xaxis: ApexXAxis,
  stroke: ApexStroke,
};
@Component({
  selector: 'app-category-compare',
  templateUrl: './category-compare.component.html',
  styleUrls: ['./category-compare.component.scss']
})
export class CategoryCompareComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  apiVal:any;
  todayDatas:number[] = [];
  yesterdayDatas:number[] = [];
  categories:string[] = [];
  todayParcentages:number[] = [];

  constructor() {
    this.initializeData();
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
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: 50,
        style: {
          fontSize: "9px",
          colors: ["#000000"],
        },
        formatter(val, opts?) {
          if(opts.seriesIndex == 0){
            return val + ''
          }
          else return ""
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.categories
      },
    };
  }

  initializeData(){
    this.apiVal = [
      {
          "Category": "Bank",
          "Todays_Value": "139.4",
          "Todays_percentage": "2.31",
          "Yesterdays_Value": "163.5",
          "Yesterdays_percentage": "2.71"
      },
      {
          "Category": "Cement",
          "Todays_Value": "160.1",
          "Todays_percentage": "2.65",
          "Yesterdays_Value": "136.6",
          "Yesterdays_percentage": "2.26"
      },
      {
          "Category": "Ceramics Sector",
          "Todays_Value": "82.0",
          "Todays_percentage": "1.36",
          "Yesterdays_Value": "107.1",
          "Yesterdays_percentage": "1.77"
      },
      {
          "Category": "Corporate Bond",
          "Todays_Value": "0.4",
          "Todays_percentage": "0.01",
          "Yesterdays_Value": "0.4",
          "Yesterdays_percentage": "0.01"
      },
      {
          "Category": "Engineering",
          "Todays_Value": "499.5",
          "Todays_percentage": "8.27",
          "Yesterdays_Value": "501.0",
          "Yesterdays_percentage": "8.29"
      },
      {
          "Category": "Financial Institutions",
          "Todays_Value": "316.0",
          "Todays_percentage": "5.23",
          "Yesterdays_Value": "119.7",
          "Yesterdays_percentage": "1.98"
      },
      {
          "Category": "Food and Allied",
          "Todays_Value": "341.2",
          "Todays_percentage": "5.65",
          "Yesterdays_Value": "407.9",
          "Yesterdays_percentage": "6.75"
      },
      {
          "Category": "Fuel and Power",
          "Todays_Value": "312.0",
          "Todays_percentage": "5.16",
          "Yesterdays_Value": "370.0",
          "Yesterdays_percentage": "6.12"
      },
      {
          "Category": "Insurance",
          "Todays_Value": "87.0",
          "Todays_percentage": "1.44",
          "Yesterdays_Value": "106.0",
          "Yesterdays_percentage": "1.75"
      },
      {
          "Category": "IT Sector",
          "Todays_Value": "88.7",
          "Todays_percentage": "1.47",
          "Yesterdays_Value": "119.6",
          "Yesterdays_percentage": "1.98"
      },
      {
          "Category": "Jute",
          "Todays_Value": "9.1",
          "Todays_percentage": "0.15",
          "Yesterdays_Value": "10.1",
          "Yesterdays_percentage": "0.17"
      },
      {
          "Category": "Life Insurance",
          "Todays_Value": "141.5",
          "Todays_percentage": "2.34",
          "Yesterdays_Value": "161.0",
          "Yesterdays_percentage": "2.66"
      },
      {
          "Category": "Miscellaneous",
          "Todays_Value": "799.0",
          "Todays_percentage": "13.22",
          "Yesterdays_Value": "1048.0",
          "Yesterdays_percentage": "17.34"
      },
      {
          "Category": "Mutual Funds",
          "Todays_Value": "117.0",
          "Todays_percentage": "1.94",
          "Yesterdays_Value": "148.0",
          "Yesterdays_percentage": "2.45"
      },
      {
          "Category": "Paper and Printing",
          "Todays_Value": "555.9",
          "Todays_percentage": "9.20",
          "Yesterdays_Value": "197.6",
          "Yesterdays_percentage": "3.27"
      },
      {
          "Category": "Pharmaceuticals and Chemicals",
          "Todays_Value": "629.0",
          "Todays_percentage": "10.41",
          "Yesterdays_Value": "574.0",
          "Yesterdays_percentage": "9.50"
      },
      {
          "Category": "Services and Real Estate",
          "Todays_Value": "57.0",
          "Todays_percentage": "0.94",
          "Yesterdays_Value": "51.0",
          "Yesterdays_percentage": "0.84"
      },
      {
          "Category": "Tannery Industries",
          "Todays_Value": "293.0",
          "Todays_percentage": "4.85",
          "Yesterdays_Value": "8.2",
          "Yesterdays_percentage": "0.14"
      },
      {
          "Category": "Telecommunication",
          "Todays_Value": "23.0",
          "Todays_percentage": "0.38",
          "Yesterdays_Value": "141.0",
          "Yesterdays_percentage": "2.33"
      },
      {
          "Category": "Textile",
          "Todays_Value": "1175.5",
          "Todays_percentage": "19.45",
          "Yesterdays_Value": "1021.0",
          "Yesterdays_percentage": "16.90"
      },
      {
          "Category": "Travel and Leisure",
          "Todays_Value": "216.8",
          "Todays_percentage": "3.59",
          "Yesterdays_Value": "162.0",
          "Yesterdays_percentage": "2.68"
      }
    ]
    for(let obj of this.apiVal){
      this.todayDatas.push(obj["Todays_Value"]);
      this.yesterdayDatas.push(obj["Yesterdays_Value"])
      this.categories.push(obj["Category"])
      this.todayParcentages.push(obj["Todays_percentage"])
    }
  }

}
