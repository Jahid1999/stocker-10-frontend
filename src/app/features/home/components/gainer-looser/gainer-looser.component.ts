import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { of } from "rxjs";
import { GainerLooser } from "src/app/features/home/components/gainer-looser/gainer-looser"
import { GraphService } from "src/app/features/home/components/gainer-looser/graph.service";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  tooltip: ApexTooltip | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
};

@Component({
    selector: 'app-gainer-looser',
    templateUrl: './gainer-looser.component.html',
    styleUrls: ['./gainer-looser.component.scss']
})

export class GainerLooserComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | any;
  @Input() gainLooserDataFromParent: GainerLooser[] | any ;
  public chartOptions: Partial<ChartOptions> | any;
  public gainer_looser_data_list: GainerLooser[]  = [];
  category_name_list: string [] = new Array(21);
  winner_mark_list: number[] = new Array(21);
  neutral_mark_list: number[] = new Array(21);
  looser_mark_list: number[] = new Array(21);

  //gainer_looser_data_list: GainerLooser[] = [];

  constructor(private service: GraphService) {

  }
  ngOnInit(): void{
    this.gainer_looser_data_list = this.gainLooserDataFromParent ;
    this.setArray();
    this.setChart();

    // this.service.getGainerLooser().subscribe(
    //   (response: any)=>{
    //     this.gainer_looser_data_list = response ;
    //     console.log( this.gainer_looser_data_list.length + "========================================" + this.gainer_looser_data_list[0].Category)
    //     this.setArray() ;
    //     this.setChart();
    //     console.log(this.category_name_list);
    // });
  }

  setArray(){
    this.winner_mark_list = new Array(this.gainer_looser_data_list.length) ;
    for(let i=0 ; i <this.gainer_looser_data_list.length ; i++){
      console.log(this.gainer_looser_data_list[0].Winner)
      this.category_name_list[i]=this.gainer_looser_data_list[i].Category;
      this.winner_mark_list[i] = this.gainer_looser_data_list[i].Winner ;
      this.neutral_mark_list[i] = this.gainer_looser_data_list[i].Neutral ;
      this.looser_mark_list[i] = this.gainer_looser_data_list[i].Loser ;
    }
  }

  setChart(){
    this.chartOptions = {
      series: [
        {
          name: "Winner",
          data: this.winner_mark_list
        },
        {
          name: "Neutral",
          data: this.neutral_mark_list
        },
        {
          name: "Looser",
          data: this.looser_mark_list
        },
      ],
      chart: {
        type: "bar",
        height: 550,
        stacked: true,
        toolbar: {
          show: true
        },
        parentHeightOffset: 0
      },
      // grid:{
      //   show: false,
      //   borderColor: '#90A4AE',
      // },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            // position: 'top',

          },
          barHeight: '85%'
        }
      },

      dataLabels: {
        enabled: true

      },
      // options: {
      //   datalabels: {
      //     display: false,
      //   },
      // },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        // text: "Fiction Books Sales"
      },
      xaxis: {
        type: 'category',
        tickPlacement: 'between',
        categories: this.category_name_list,
        labels: {
          formatter: function(val: any) {
            return val ;
          }
        },
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
      yaxis: {
        labels: {
          align: 'right',
          maxWidth: 200,
          minWidth: 100
        }
      },
      tooltip: {
        y: {
          formatter: function(val: any) {
            return val ;
          }
        }
      },
      fill: {
        opacity: 1,
        colors:['#285e33', '#284e5e', '#6a3737'],
      },
      // colors:['#F44336', '#E91E63', '#9C27B0'],
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 400,
        show: false
      }
    };
  }
}
