import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
import {ObvDataService} from "./service/obv-data.service";

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

  @ViewChild("chart") chart : ChartComponent|any;
  public lineGraph : Partial<ChartOptions>|any;
  public company_code: string = '';
  public obvGraphData : any[][] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private _obvService:ObvDataService) { }


  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.getOBVGraphData();
  }

  getOBVGraphData(){
    this._obvService.getOBVGraphData(this.company_code).subscribe((response:any)=>{
      // console.log(response);
      response.forEach((item:any)=>{
        this.obvGraphData.push([item.DateEpoch,item.OBV]);
      });
      this.setOBVGraph();
      console.log(this.obvGraphData[0])
    },(error) => {
      console.log("error = ",error);
    });
  }

  setOBVGraph(){
    this.lineGraph = {
      series: [
        {
          name: "Price",
          data: this.obvGraphData
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
        colors:['#AAC4FF'],
        width: 2,
      },

      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      yaxis: {
        title: {
          text: 'OBV'
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
