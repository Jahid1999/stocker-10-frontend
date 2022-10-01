import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexStroke,
  ApexAnnotations,
  ApexTooltip,
  ApexFill,
  ApexTitleSubtitle,
  ApexMarkers
} from "ng-apexcharts";

import { seriesData, seriesDataLinear ,seriesDataArea} from "./ohlc";

export type ChartOptions = {
  series: ApexAxisChartSeries|any;
  chart: ApexChart|any;
  xaxis: ApexXAxis|any;
  yaxis: ApexYAxis|any;
  plotOptions: ApexPlotOptions|any;
  dataLabels: ApexDataLabels|any;
  stroke: ApexStroke|any;
  markers: ApexMarkers|any;
  title: ApexTitleSubtitle|any;
  fill: ApexFill|any;
  tooltip: ApexTooltip|any;
  annotations: ApexAnnotations|any;
  colors: any|any;
  toolbar: any|any;
};

@Component({
  selector: 'app-bb-graph',
  templateUrl: './bb-graph.component.html',
  styleUrls: ['./bb-graph.component.scss']
})
export class BbGraphComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent|any;
  public chartOptions: Partial<ChartOptions>;
  public chartBarOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          type: "candlestick",
          data: seriesData
        },
        {
          type: "area",
          data: seriesDataArea
        }
      ],
      // series: [
      //   {
      //     name: "candle",
      //     data: seriesData
      //   }
      // ],
      chart: {
        height: 300,
        // id: "candles",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#3C90EB",
            downward: "#DF7D46"
          }
        }
      },
      annotations: {
        // yaxis: [
        //   {
        //     borderColor: "#999",
        //     label: {
        //       text: "Support",
        //       style: {
        //         color: "#fff",
        //         background: "#00E396"
        //       }
        //     }
        //   }
        // ],
        // xaxis: [
        //   {
        //     borderColor: "#999",
        //     label: {
        //       text: "Rally",
        //       style: {
        //         color: "#fff",
        //         background: "#775DD0"
        //       }
        //     }
        //   }
        // ]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      fill: {
        // type: "gradient",
        // gradient: {
        //   shadeIntensity: 1,
        //   opacityFrom: 0.7,
        //   opacityTo: 0.9,
        //   stops: [0, 100]
        // }
      },
      
    };

    this.chartBarOptions = {
      series: [
        {
          name: "volume",
          data: seriesDataLinear
        }
      ],
      chart: {
        height: 160,
        type: "bar",
        brush: {
          enabled: true,
          target: "candles"
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("20 Jan 2017").getTime(),
            max: new Date("10 Dec 2017").getTime()
          },
          fill: {
            color: "#ccc",
            opacity: 0.4
          },
          stroke: {
            color: "#0D47A1"
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: "#F15B46"
              },
              {
                from: 1,
                to: 10000,
                color: "#FEB019"
              }
            ]
          }
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          offsetX: 13
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
