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
import { dataSeries } from "./data-series";

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
  selector: 'app-obv-graph',
  templateUrl: './obv-graph.component.html',
  styleUrls: ['./obv-graph.component.scss']
})
export class ObvGraphComponent implements OnInit {

  constructor() { }

  @ViewChild("chart") chart : ChartComponent|any;
  public lineGraph : Partial<ChartOptions>|any;
  ngOnInit(): void {
    this.setOBVGraph();
  }
  setOBVGraph(){
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }
    this.lineGraph = {
      series: [
        {
          name: "Price",
          data: dates
        }
      ],
      chart: {
        height: 400,
        type: "area",
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors:['#4287f5'],
        width: 2,
      },

      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      yaxis: {
        labels: {
          formatter: function (val:any) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
      },
      fill: {
        colors: ['#4287f5'],
        type: 'gradient',
        gradient: {

          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: .6,
          stops: [0, 90, 100]
        },
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }

}
