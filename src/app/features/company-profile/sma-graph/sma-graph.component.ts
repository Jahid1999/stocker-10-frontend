import { Component, ViewChild } from "@angular/core";
import { redrawElement } from "@syncfusion/ej2-angular-charts";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexDataLabels,
  ApexStroke
} from "ng-apexcharts";

const seriesData = [
  {
    x: new Date(2016, 1, 1),
    y: [51.98, 56.29, 51.59, 53.85]
  },
  {
    x: new Date(2016, 2, 1),
    y: [53.66, 54.99, 51.35, 52.95]
  },
  {
    x: new Date(2016, 3, 1),
    y: [52.96, 53.78, 51.54, 52.48]
  },
  {
    x: new Date(2016, 4, 1),
    y: [52.54, 52.79, 47.88, 49.24]
  },
  {
    x: new Date(2016, 5, 1),
    y: [49.1, 52.86, 47.7, 52.78]
  },
  {
    x: new Date(2016, 6, 1),
    y: [52.83, 53.48, 50.32, 52.29]
  },
  {
    x: new Date(2016, 7, 1),
    y: [52.2, 54.48, 51.64, 52.58]
  },
  {
    x: new Date(2016, 8, 1),
    y: [52.76, 57.35, 52.15, 57.03]
  },
  {
    x: new Date(2016, 9, 1),
    y: [57.04, 58.15, 48.88, 56.19]
  },
  {
    x: new Date(2016, 10, 1),
    y: [56.09, 58.85, 55.48, 58.79]
  },
  {
    x: new Date(2016, 11, 1),
    y: [58.78, 59.65, 58.23, 59.05]
  },
  {
    x: new Date(2017, 0, 1),
    y: [59.37, 61.11, 59.35, 60.34]
  },
  {
    x: new Date(2017, 1, 1),
    y: [60.4, 60.52, 56.71, 56.93]
  },
  {
    x: new Date(2017, 2, 1),
    y: [57.02, 59.71, 56.04, 56.82]
  },
  {
    x: new Date(2017, 3, 1),
    y: [56.97, 59.62, 54.77, 59.3]
  },
  {
    x: new Date(2017, 4, 1),
    y: [59.11, 62.29, 59.1, 59.85]
  },
  {
    x: new Date(2017, 5, 1),
    y: [59.97, 60.11, 55.66, 58.42]
  },
  {
    x: new Date(2017, 6, 1),
    y: [58.34, 60.93, 56.75, 57.42]
  },
  {
    x: new Date(2017, 7, 1),
    y: [57.76, 58.08, 51.18, 54.71]
  },
  {
    x: new Date(2017, 8, 1),
    y: [54.8, 61.42, 53.18, 57.35]
  },
  {
    x: new Date(2017, 9, 1),
    y: [57.56, 63.09, 57.0, 62.99]
  },
  {
    x: new Date(2017, 10, 1),
    y: [62.89, 63.42, 59.72, 61.76]
  },
  {
    x: new Date(2017, 11, 1),
    y: [61.71, 64.15, 61.29, 63.04]
  }
];

export const seriesDataLinear = [
  {
    x: new Date(2016, 1, 1),
    y: 56.29
  },
  {
    x: new Date(2016, 2, 1),
    y: 52.95
  },
  {
    x: new Date(2016, 3, 1),
    y:  52.48
  },
  {
    x: new Date(2016, 4, 1),
    y:  49.24
  },
  {
    x: new Date(2016, 5, 1),
    y: 52.78
  },
  {
    x: new Date(2016, 6, 1),
    y:  52.29
  },
  {
    x: new Date(2016, 7, 1),
    y: 52.58
  },
  {
    x: new Date(2016, 8, 1),
    y:  57.0
  },
  {
    x: new Date(2016, 9, 1),
    y:  56.1
  },
  {
    x: new Date(2016, 10, 1),
    y:  58.7
  },
  {
    x: new Date(2016, 11, 1),
    y:  59.0
  },
  {
    x: new Date(2017, 0, 1),
    y:  60.3
  },
  {
    x: new Date(2017, 1, 1),
    y: 56.93
  },
  {
    x: new Date(2017, 2, 1),
    y:  56.8
  },
  {
    x: new Date(2017, 3, 1),
    y:  59.3
  },
  {
    x: new Date(2017, 4, 1),
    y: 59.85
  },
  {
    x: new Date(2017, 5, 1),
    y:  58.4
  },
  {
    x: new Date(2017, 6, 1),
    y:  57.4
  },
  {
    x: new Date(2017, 7, 1),
    y:  54.71
  },
  {
    x: new Date(2017, 8, 1),
    y: 57.35
  },
  {
    x: new Date(2017, 9, 1),
    y: 62.99
  },
  {
    x: new Date(2017, 10, 1),
    y:  61.76
  },
  {
    x: new Date(2017, 11, 1),
    y:  63.04
  }
];
const seriesDataLinear2 = [
  {
    x: new Date(2016, 1, 1),
    y: 3.85
  },
  {
    x: new Date(2016, 2, 1),
    y: 2.95
  },
  {
    x: new Date(2016, 3, 1),
    y: -12.48
  },
  {
    x: new Date(2016, 4, 1),
    y: 19.24
  },
  {
    x: new Date(2016, 5, 1),
    y: 12.78
  },
  {
    x: new Date(2016, 6, 1),
    y: 22.29
  },
  {
    x: new Date(2016, 7, 1),
    y: -12.58
  },
  {
    x: new Date(2016, 8, 1),
    y: -17.03
  },
  {
    x: new Date(2016, 9, 1),
    y: -19.19
  },
  {
    x: new Date(2016, 10, 1),
    y: -28.79
  },
  {
    x: new Date(2016, 11, 1),
    y: -39.05
  },
  {
    x: new Date(2017, 0, 1),
    y: 20.34
  },
  {
    x: new Date(2017, 1, 1),
    y: 36.93
  },
  {
    x: new Date(2017, 2, 1),
    y: 36.82
  },
  {
    x: new Date(2017, 3, 1),
    y: 29.3
  },
  {
    x: new Date(2017, 4, 1),
    y: 39.85
  },
  {
    x: new Date(2017, 5, 1),
    y: 28.42
  },
  {
    x: new Date(2017, 6, 1),
    y: 37.42
  },
  {
    x: new Date(2017, 7, 1),
    y: 24.71
  },
  {
    x: new Date(2017, 8, 1),
    y: 37.35
  },
  {
    x: new Date(2017, 9, 1),
    y: 32.99
  },
  {
    x: new Date(2017, 10, 1),
    y: 31.76
  },
  {
    x: new Date(2017, 11, 1),
    y: 43.04
  }
];
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
};
@Component({
  selector: 'app-sma-graph',
  templateUrl: './sma-graph.component.html',
  styleUrls: ['./sma-graph.component.scss']
})
export class SmaGraphComponent {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartCandleOptions: Partial<ChartOptions> | any;
  public chartBarOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartCandleOptions = {
      series: [
        {
          name: "line",
          type: "line",
          data: seriesDataLinear
        },
        {
          name: "candle",
          type: "candlestick",
          data: seriesData
        }
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar:false
      },
      
      title: {
        text: "Simple moving average",
        align: "left"
      },
      stroke: {
        width: [3, 1]
      },
      tooltip: {
        shared: true,
        custom: [
          function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
            return w.globals.series[seriesIndex][dataPointIndex];
          },
          function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
            const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
            const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
            const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
            const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
            return (
              '<div class="apexcharts-tooltip-candlestick">' +
              '<div>Open: <span class="value">' +
              o +
              "</span></div>" +
              '<div>High: <span class="value">' +
              h +
              "</span></div>" +
              '<div>Low: <span class="value">' +
              l +
              "</span></div>" +
              '<div>Close: <span class="value">' +
              c +
              "</span></div>" +
              "</div>"
            );
          }
        ]
      },
      // plotOptions: {
      //   candlestick: {
      //     colors: {
      //       upward: "#3C90EB",
      //       downward: "#DF7D46"
      //     }
      //   },
      //   line:{
      //     colors:"#ffffff"
      //   }
      // },
      xaxis: {
        type: "datetime",
        labels:{
          show:true
        },
        axisBorder:{
          show:true
        },
        axisTicks:{
          show:true
        }
      }
    };

    this.chartBarOptions = {
      series: [
        {
          name: "volume",
          data: seriesDataLinear2
        }
      ],
      // title: {
      //   text: "Volume",
      //   align: "right",
      //   floating:true
      // },
      chart: {
        height: 160,
        type: "bar",
        toolbar:false,
        // brush: {
        //   enabled: true,
        //   target: "candles"
        // // },
        // selection: {
        //   enabled: false,
        //   xaxis: {
        //     min: new Date("20 Jan 2017").getTime(),
        //     max: new Date("10 Dec 2017").getTime()
        //   },
        //   fill: {
        //     color: "#ccc",
        //     opacity: 0.4
        //   },
        //   stroke: {
        //     color: "#0D47A1"
        //   }
        // }
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
        // sorted:true,
        axisBorder: {
          offsetX: 1
        }
      },
      // tooltip: {
      //   shared: false,
      //   custom: [
      //     function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
      //       return w.globals.series[seriesIndex][dataPointIndex];
      //     },
      //     function({ seriesIndex, dataPointIndex, w }:{ seriesIndex:any, dataPointIndex:any, w:any }) {
      //       const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
      //       const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
      //       const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
      //       const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
      //       return (
      //         '<div class="apexcharts-tooltip-candlestick">' +
      //         '<div>Open: <span class="value">' +
      //         o +
      //         "</span></div>" +
      //         '<div>High: <span class="value">' +
      //         h +
      //         "</span></div>" +
      //         '<div>Low: <span class="value">' +
      //         l +
      //         "</span></div>" +
      //         '<div>Close: <span class="value">' +
      //         c +
      //         "</span></div>" +
      //         "</div>"
      //       );
      //     }
      //   ]
      // },
      // yaxis: {
      //   labels: {
      //     show: false
      //   }
      // }
    };
    
  }

  // public generateDayWiseTimeSeries(baseval:any , count:any, yrange:any) {
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

  //     series.push([baseval, y]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }

}
