import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
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
import { RsiGraphService } from './rsi-graph.service';

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
  selector: 'app-rsi-graph',
  templateUrl: './rsi-graph.component.html',
  styleUrls: ['./rsi-graph.component.scss']
})
export class RsiGraphComponent implements OnInit {
  public lineGraph : Partial<ChartOptions>|any;
  public company_code: string = '';
  public rsiGraphData : any[][] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private service: RsiGraphService) { }

  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.getRSIGraphData();
  }

  getRSIGraphData(){
    this.service.getRSI(this.company_code).subscribe((response:any)=>{
      // console.log(response);
      for (var key in response) {
        this.rsiGraphData.push([parseInt(key), response[key]]);
        // console.log(key + ":======:" + response[key]);
      }
      // this.setADMGraph();
      this.setRSIGraph();
    },(error) => {
      console.log("error = ",error);
    });
  }


  setRSIGraph(){
    this.lineGraph = {
      series: [
        {
          name: "Price",
          data: this.rsiGraphData
        }
      ],
      chart: {
        height: 400,
        type: "line",
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
      },
      title: {
        text: "Relative Strength Index(RSI)",
        align: "left"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        colors:['#AAC4FF'],
        width: 2,
        curve: 'smooth',
      },

      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      yaxis: {
        title: {
          text: 'RSI'
        },
        labels: {
          formatter: function(val: any) {
            return val.toFixed(2);
          }
        }
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
