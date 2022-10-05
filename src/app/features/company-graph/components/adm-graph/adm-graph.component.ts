import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmGraphService } from './adm-graph.service';
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
  selector: 'app-adm-graph',
  templateUrl: './adm-graph.component.html',
  styleUrls: ['./adm-graph.component.scss']
})
export class AdmGraphComponent implements OnInit {
  // public company_code: string = '';

  // constructor(private activatedRoute: ActivatedRoute, private service: AdmGraphService) { }

  // ngOnInit(): void {
  //   this.company_code = this.activatedRoute.snapshot.params['company-name'];
  //   console.log("-----------:" + this.company_code);
  //   this.service.getAverageDirectionalIndex(this.company_code).subscribe(
  //     (response: any)=>{
  //       console.log("================:" + JSON.stringify(response))
  //   });
  // }

  @ViewChild("chart") chart : ChartComponent|any;
  public chartOptions1 : Partial<ChartOptions>|any;
  public chartOptions2 : Partial<ChartOptions>|any;
  public company_code: string = '';
  public admGraphData : any[][] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private service: AdmGraphService) { }


  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.getADMGraphData();
  }

  getADMGraphData(){
    this.service.getAverageDirectionalIndex(this.company_code).subscribe((response:any)=>{
      console.log(response);
      response.forEach((item:any)=>{
        this.admGraphData.push([item.DateEpoch, item.ADX]);
      });
      // this.setADMGraph();
      this.setADMGraph2();
    },(error) => {
      console.log("error = ",error);
    });
  }
  
  setADMGraph2(){
    this.chartOptions1 = {
      series: [
        {
          name: "Price",
          data: this.admGraphData
        }
      ],
      chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      title: {
        text: "Average Directional Movement Index(ADX)",
        align: "left"
      },
      colors: ["#546E7A"],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: 'ADX'
        },
        labels: {
          formatter: function(val: any) {
            return val.toFixed(2);
          }
        }
      },
    };

    this.chartOptions2 = {
      series: [
        {
          name: "Price",
          data: this.admGraphData
        }
      ],
      chart: {
        id: "chart1",
        height: 130,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date().getTime()-4*30*24*3600*1000,
            max: new Date().getTime()
          }
        }
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1
        }
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        },
        // labels: {
        //   formatter: function(val: any) {
        //     return val.toFixed(0);
        //   }
        // }
      },
      yaxis: {
        tickAmount: 2,
        title: {
          text: 'ADX'
        },
        labels: {
          formatter: function(val: any) {
            return val.toFixed(2);
          }
        }
        
      }
    };
  }

}
