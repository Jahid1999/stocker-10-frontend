import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexYAxis,
    ApexXAxis,
    ApexTitleSubtitle

  } from "ng-apexcharts";

  export type ChartOptions = {
    series: ApexAxisChartSeries|any;
    chart: ApexChart|any;
    xaxis: ApexXAxis|any;
    yaxis: ApexYAxis|any;
    title: ApexTitleSubtitle|any;
  };


// let chartData: any[] = [
// {x: new Date('2012-10-15'), open: 90.3357, high: 93.2557, low: 87.0885,close: 87.12,volume: 646996264},
// {x: new Date('2012-10-22'), open: 87.4885, high: 90.7685, low: 84.4285,close: 86.2857,volume: 866040680 },
// {x: new Date('2012-10-29'), open: 84.9828, high: 86.1428, low: 82.1071,close: 82.4,volume: 367371310},
// {x: new Date('2012-11-05'), open: 83.3593, high: 84.3914, low: 76.2457,close: 78.1514,volume: 919719846},
// {x: new Date('2012-11-12'), open: 79.1643, high: 79.2143, low: 72.25,close: 75.3825,volume: 894382149},
// {x: new Date('2012-11-19'), open: 77.2443, high: 81.7143, low: 77.1257,close: 81.6428,volume: 527416747},
// {x: new Date('2012-11-26'), open: 82.2714, high: 84.8928, low: 81.7514,close: 83.6114,volume: 646467974},
// {x: new Date('2012-12-03'), open: 84.8071, high: 84.9414, low: 74.09,close: 76.1785,volume: 980096264},
// {x: new Date('2012-12-10'), open: 75, high: 78.5085, low: 72.2257,close: 72.8277,volume: 835016110},
// {x: new Date('2012-12-17'), open: 72.7043, high: 76.4143, low: 71.6043,close: 74.19,volume: 726150329},
// {x: new Date('2012-12-24'), open: 74.3357, high: 74.8928, low: 72.0943,close: 72.7984,volume: 321104733},
// {x: new Date('2012-12-31'), open: 72.9328, high: 79.2857, low: 72.7143,close: 75.2857,volume: 540854882},
// {x: new Date('2013-01-07'), open: 74.5714, high: 75.9843, low: 73.6,close: 74.3285,volume: 574594262},
// {x: new Date('2013-01-14'), open: 71.8114, high: 72.9643, low: 69.0543,close: 71.4285,volume: 803105621},
// {x: new Date('2013-01-21'), open: 72.08, high: 73.57, low: 62.1428,close: 62.84,volume: 971912560},
// {x: new Date('2013-01-28'), open: 62.5464, high: 66.0857, low: 62.2657,close: 64.8028,volume: 656549587},
// {x: new Date('2013-02-04'), open: 64.8443, high: 68.4014, low: 63.1428,close: 67.8543,volume: 743778993},
// {x: new Date('2013-02-11'), open: 68.0714, high: 69.2771, low: 65.7028,close: 65.7371,volume: 585292366},
// {x: new Date('2013-02-18'), open: 65.8714, high: 66.1043, low: 63.26,close: 64.4014,volume: 421766997},
// {x: new Date('2013-02-25'), open: 64.8357, high: 65.0171, low: 61.4257,close: 61.4957,volume: 582741215},
// {x: new Date('2013-03-04'), open: 61.1143, high: 62.2043, low: 59.8571,close: 61.6743,volume: 632856539},
// {x: new Date('2013-03-11'), open: 61.3928, high: 63.4614, low: 60.7343,close: 63.38,volume: 572066981},
// {x: new Date('2013-03-18'), open: 63.0643, high: 66.0143, low: 63.0286,close: 65.9871,volume: 552156035},
// {x: new Date('2013-03-25'), open: 66.3843, high: 67.1357, low: 63.0886,close: 63.2371,volume: 390762517},
// {x: new Date('2013-04-01'), open: 63.1286, high: 63.3854, low: 59.9543,close: 60.4571,volume: 505273732},
// {x: new Date('2013-04-08'), open: 60.6928, high: 62.57, low: 60.3557,close: 61.4,volume: 387323550},
// {x: new Date('2013-04-15'), open: 61, high: 61.1271, low: 55.0143,close: 55.79,volume: 709945604},
// {x: new Date('2013-04-22'), open: 56.0914, high: 59.8241, low: 55.8964,close: 59.6007,volume: 787007506},
// {x: new Date('2013-04-29'), open: 60.0643, high: 64.7471, low: 60,close: 64.2828,volume: 655020017},
// {x: new Date('2013-05-06'), open: 65.1014, high: 66.5357, low: 64.3543,close: 64.71,volume: 545488533},
// {x: new Date('2013-05-13'), open: 64.5014, high: 65.4143, low: 59.8428,close: 61.8943,volume: 633706550},
// {x: new Date('2013-05-20'), open: 61.7014, high: 64.05, low: 61.4428,close: 63.5928,volume: 494379068},
// {x: new Date('2013-05-27'), open: 64.2714, high: 65.3, low: 62.7714,close: 64.2478,volume: 362907830},
// {x: new Date('2013-06-03'), open: 64.39, high: 64.9186, low: 61.8243,close: 63.1158,volume: 443249793},
// {x: new Date('2013-06-10'), open: 63.5328, high: 64.1541, low: 61.2143,close: 61.4357,volume: 389680092},
// {x: new Date('2013-06-17'), open: 61.6343, high: 62.2428, low: 58.3,close: 59.0714,volume: 400384818},
// {x: new Date('2013-06-24'), open: 58.2, high: 58.38, low: 55.5528,close: 56.6471,volume: 519314826},
// {x: new Date('2013-07-01'), open: 57.5271, high: 60.47, low: 57.3171,close: 59.6314,volume: 343878841},
// {x: new Date('2013-07-08'), open: 60.0157, high: 61.3986, low: 58.6257,close: 60.93,volume: 384106977},
// {x: new Date('2013-07-15'), open: 60.7157, high: 62.1243, low: 60.5957,close: 60.7071,volume: 286035513},
// {x: new Date('2013-07-22'), open: 61.3514, high: 63.5128, low: 59.8157,close: 62.9986,volume: 395816827},
// {x: new Date('2013-07-29'), open: 62.9714, high: 66.1214, low: 62.8857,close: 66.0771,volume: 339668858},
// {x: new Date('2013-08-12'), open: 65.2657, high: 72.0357, low: 65.2328,close: 71.7614,volume: 711563584},
// {x: new Date('2013-08-19'), open: 72.0485, high: 73.3914, low: 71.1714,close: 71.5743,volume: 417119660},
// {x: new Date('2013-08-26'), open: 71.5357, high: 72.8857, low: 69.4286,close: 69.6023,volume: 392805888},
// {x: new Date('2013-09-02'), open: 70.4428, high: 71.7485, low: 69.6214,close: 71.1743,volume: 317244380},
// {x: new Date('2013-09-09'), open: 72.1428, high: 72.56, low: 66.3857,close: 66.4143,volume: 669376320},
// {x: new Date('2013-09-16'), open: 65.8571, high: 68.3643, low: 63.8886,close: 66.7728,volume: 625142677},
// {x: new Date('2013-09-23'), open: 70.8714, high: 70.9871, low: 68.6743,close: 68.9643,volume: 475274537},
// {x: new Date('2013-09-30'), open: 68.1786, high: 70.3357, low: 67.773,close: 69.0043,volume: 368198906},
// {x: new Date('2013-10-07'), open: 69.5086, high: 70.5486, low: 68.3257,close: 70.4017,volume: 361437661},
// {x: new Date('2013-10-14'), open: 69.9757, high: 72.7514, low: 69.9071,close: 72.6985,volume: 342694379},
// {x: new Date('2013-10-21'), open: 73.11, high: 76.1757, low: 72.5757,close: 75.1368,volume: 490458997},
// {x: new Date('2013-10-28'), open: 75.5771, high: 77.0357, low: 73.5057,close: 74.29,volume: 508130174},
// {x: new Date('2013-11-04'), open: 74.4428, high: 75.555, low: 73.1971,close: 74.3657,volume: 318132218},
// {x: new Date('2013-11-11'), open: 74.2843, high: 75.6114, low: 73.4871,close: 74.9987,volume: 306711021},
// {x: new Date('2013-11-18'), open: 74.9985, high: 75.3128, low: 73.3814,close: 74.2571,volume: 282778778},
// ];
// const data = [
//     { time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
//     { time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
//     { time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
//     { time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
//     { time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
//     { time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
//     { time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
//     { time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
//     { time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
//     { time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
//     { time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 },
//     { time: new Date(2013, 1, 19), open: 265.91, high: 270.11, low: 264.50, close: 269.75, volume: 2856410 },
//     { time: new Date(2013, 1, 20), open: 270.20, high: 274.30, low: 266.37, close: 266.41, volume: 3530656 },
//     { time: new Date(2013, 1, 21), open: 265.12, high: 269.48, low: 263.25, close: 265.94, volume: 3638795 },
//     { time: new Date(2013, 1, 22), open: 266.62, high: 267.11, low: 261.61, close: 265.42, volume: 3125202 },
//     { time: new Date(2013, 1, 25), open: 266.94, high: 268.69, low: 259.65, close: 259.87, volume: 3032709 },
//     { time: new Date(2013, 1, 26), open: 260.89, high: 262.04, low: 255.73, close: 259.36, volume: 3348760 },
//     { time: new Date(2013, 1, 27), open: 259.40, high: 265.83, low: 256.86, close: 263.25, volume: 2908410 },
//     { time: new Date(2013, 1, 28), open: 261.81, high: 267.00, low: 260.63, close: 264.27, volume: 2668154 },
//     { time: new Date(2013, 2, 1), open: 263.27, high: 266.60, low: 261.04, close: 265.74, volume: 2958799 },
//     { time: new Date(2013, 2, 4), open: 265.36, high: 273.30, low: 264.14, close: 273.11, volume: 3457519 },
//     { time: new Date(2013, 2, 5), open: 274.00, high: 276.68, low: 269.99, close: 275.59, volume: 3688583 },
//     { time: new Date(2013, 2, 6), open: 275.76, high: 276.49, low: 271.83, close: 273.79, volume: 2051552 },
//     { time: new Date(2013, 2, 7), open: 274.10, high: 274.80, low: 271.85, close: 273.88, volume: 1939787 },
//     { time: new Date(2013, 2, 8), open: 275.00, high: 275.44, low: 271.50, close: 274.19, volume: 1880117 },
//     { time: new Date(2013, 2, 11), open: 273.43, high: 273.99, low: 270.40, close: 271.24, volume: 1905076 },
//     { time: new Date(2013, 2, 12), open: 271.00, high: 277.40, low: 270.36, close: 274.13, volume: 3246856 },
//     { time: new Date(2013, 2, 13), open: 275.24, high: 276.50, low: 272.64, close: 275.10, volume: 1884215 },
//     { time: new Date(2013, 2, 14), open: 269.67, high: 270.00, low: 263.53, close: 265.74, volume: 5227305 },
//     { time: new Date(2013, 2, 15), open: 264.98, high: 267.26, low: 260.05, close: 261.82, volume: 4866472 },
//     { time: new Date(2013, 2, 18), open: 259.30, high: 261.49, low: 257.12, close: 257.89, volume: 2721496 },
//     { time: new Date(2013, 2, 19), open: 258.40, high: 259.50, low: 252.62, close: 256.41, volume: 3739566 },
//     { time: new Date(2013, 2, 20), open: 258.05, high: 259.76, low: 254.55, close: 257.28, volume: 2738970 },
//     { time: new Date(2013, 2, 21), open: 256.11, high: 257.00, low: 252.68, close: 253.39, volume: 2806446 },
//     { time: new Date(2013, 2, 22), open: 254.55, high: 257.77, low: 252.07, close: 257.75, volume: 3126299 },
//     { time: new Date(2013, 2, 25), open: 258.58, high: 259.43, low: 254.50, close: 256.02, volume: 2515058 },
//     { time: new Date(2013, 2, 26), open: 257.05, high: 261.48, low: 256.28, close: 260.31, volume: 2421160 },
//     { time: new Date(2013, 2, 27), open: 258.75, high: 265.93, low: 257.90, close: 265.30, volume: 2874924 },
//     { time: new Date(2013, 2, 28), open: 265.82, high: 267.38, low: 264.06, close: 266.49, volume: 2473857 },
//     { time: new Date(2013, 3, 1), open: 266.98, high: 267.40, low: 261.01, close: 261.61, volume: 2525200 },
//     { time: new Date(2013, 3, 2), open: 262.40, high: 265.89, low: 260.55, close: 263.32, volume: 2632338 },
//     { time: new Date(2013, 3, 3), open: 262.12, high: 263.67, low: 257.75, close: 259.03, volume: 2414484 },
//     { time: new Date(2013, 3, 4), open: 259.23, high: 260.41, low: 256.12, close: 259.08, volume: 1964612 },]
@Component({
selector: 'app-bb-graph',
templateUrl: './bb-graph.component.html',
styleUrls: ['./bb-graph.component.scss'],
})
// export class BbGraphComponent implements OnInit {
//  public data: Object[] = chartData;
// public primaryXAxis: Object = {
//     title: 'Months',
//     valueType: 'DateTime',
//     intervalType: 'Months',
//     majorGridLines: { width: 0},
// };
// public primaryYAxis: Object = {
//     title: 'Price',
//     labelFormat: '${value}',
//     minimum: 30, maximum: 180,
//     interval: 30,
// };
// public title: string = 'AAPL 2012-2017';
// public chartArea : Object = {
//   border: { width : 0}
// };
// constructor() {
//     //code
// };
// ngOnInit(): void {
// }

// }
export class BbGraphComponent implements OnInit {
    @ViewChild("chart") chart: ChartComponent | any;
    public chartOptions: Partial<ChartOptions>;
  
    constructor() {
      this.chartOptions = {
        series: [
          {
            name: "candle",
            data: [
              {
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
              {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
              },
              {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
              },
              {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
              },
              {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
              },
              {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
              },
              {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
              },
              {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
              },
              {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
              },
              {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
              },
              {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
              },
              {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
              },
              {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
              },
              {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
              },
              {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
              },
              {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
              },
              {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
              },
              {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
              },
              {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
              },
              {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
              },
              {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
              },
              {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
              },
              {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
              },
              {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
              },
              {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
              },
              {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
              },
              {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
              },
              {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
              },
              {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
              },
              {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
              },
              {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
              },
              {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
              },
              {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
              },
              {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
              },
              {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
              },
              {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
              },
              {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
              },
              {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
              },
              {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
              },
              {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
              },
              {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
              },
              {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
              },
              {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
              },
              {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
              },
              {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
              },
              {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
              },
              {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
              },
              {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
              },
              {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
              },
              {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
              }
            ]
          }
        ],
        chart: {
          type: "candlestick",
          height: 350
        },
        title: {
          text: "CandleStick Chart",
          align: "left"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      };
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  
    public generateDayWiseTimeSeries(baseval: number, count: number, yrange: { max: number; min: number; }) {
      var i = 0;
      var series = [];
      while (i < count) {
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
        series.push([baseval, y]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
}