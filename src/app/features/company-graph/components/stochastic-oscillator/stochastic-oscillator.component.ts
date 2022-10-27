import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { data } from 'jquery';
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
  ApexLegend,
  ApexTooltip,
} from 'ng-apexcharts';
import { aciData, seriesData } from './data-series';
import { StochasticOscillatorService } from './service/stochastic-oscillator.service';
import * as moment from 'moment';
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
  selector: 'app-stochastic-oscillator',
  templateUrl: './stochastic-oscillator.component.html',
  styleUrls: ['./stochastic-oscillator.component.scss'],
})
export class StochasticOscillatorComponent implements OnInit {
  public candlestickChart: Partial<ChartOptions> | any;
  public oscillatorChart: Partial<ChartOptions> | any;
  @Input() companyCode = '';
  dataReady = false;
  kseries: any = [];
  dseries: any = [];
  date: any = [];
  ovb: any = [];
  ovs: any = [];
  candleData: any = [];
  constructor(private stochasticService: StochasticOscillatorService) {}

  ngOnInit(): void {
    this.loadCandleChartData();
    this.loadStochasticData();
  }

  setPeriod(data: any) {
    for (let i = data.length - 1; i >= data.length - 365; i--) {
      this.date.push(data[i].DateEpoch);
    }
  }

  setKSeries(data: any) {
    for (let i = data.length - 1; i >= data.length - 365; i--) {
      this.kseries.push(data[i - 365].Stochastic);
    }
  }

  setDSeries(data: any) {
    for (let i = 2; i < this.kseries.length; i++) {
      //let d = (this.kseries[i]+this.kseries[i-1]+this.kseries[i-2])/3;
      this.dseries.push(
        (this.kseries[i] + this.kseries[i - 1] + this.kseries[i - 2]) / 3
      );
      this.ovs.push(20);
      this.ovb.push(80);
    }
  }
  loadStochasticData() {
    this.stochasticService
      .getStochasticData(this.companyCode)
      .subscribe((data: any) => {
        this.setPeriod(data);
        this.setKSeries(data);
        this.setDSeries(data);

        this.setOscillatorChart(this.kseries, this.dseries);
      });
  }
  findK_series() {
    let max = 0,
      min = 9000;
    let kdata = [];
    let dData = [];

    for (let i = 0; i < seriesData.length; i++) {
      max = seriesData[i].y[1] > max ? seriesData[i].y[1] : max;
      min = seriesData[i].y[2] < min ? seriesData[i].y[2] : min;

      if (i >= 13) {
        let k = ((seriesData[i].y[3] - min) / (max - min)) * 100;
        kdata.push({ date: seriesData[i].x, 'k-value': k });
      }
    }
    for (let i = 2; i < kdata.length; i++) {
      let d =
        (kdata[i]['k-value'] +
          kdata[i - 1]['k-value'] +
          kdata[i - 2]['k-value']) /
        3;
      dData.push(d);
    }
    // dData.forEach(element => {
    //   console.log(element)
    // });
    // kdata.forEach(element => {
    //   console.log(element)
    // });
    this.setOscillatorChart(kdata, dData);
  }

  setOscillatorChart(kdata: any, dData: any) {
    // let kvalue: any = [];
    // let date: any = [];
    // kdata.forEach((element: any) => {
    //    kvalue.push(element["k-value"].toFixed(2));
    //    date.push(element["date"]);
    // });
    // console.log(kvalue)
    this.oscillatorChart = {
      series: [
        {
          name: '%K',
          data: kdata.slice(2),
        },
        {
          name: '%D',
          data: dData,
        },

        {
          name: 'Overbought',
          data: this.ovb,
        },
        {
          name: 'Oversold',
          data: this.ovs,
        },
      ],
      chart: {
        type: 'line',
        height: 350,
        //width: 720
      },
      title: {
        text: 'Stochastic Oscilator (14-day period)',
        align: 'center',
      },
      colors: ['#4287f5', '#fc7b03', '#ff0000', '#0a6b15'],
      stroke: {
        width: [2, 2, 1, 1],
        dashArray: [0, 0, 4, 4],
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        markers: {
          width: 40,
          height: 8,
          strokeWidth: 0,
          radius: 0,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: this.date.slice(2),
      },
      yaxis: [
        {
          labels: {
            formatter: function (val: any) {
              if (val) return val.toFixed(2);
            },
          },
          tooltip: {
            enabled: true,
          },
        },
      ],
    };
  }
  loadCandleChartData() {
    this.stochasticService
      .getCandleData(this.companyCode)
      .subscribe((data: any) => {
        this.candleData = data;
        this.candleData.forEach((element: any) => {
          let momObject = moment(element['x'], 'DD/MM/YYYY');
          element.x = momObject.toDate();
          element.x.setDate(element.x.getDate() + 1);
          // console.log(new Date(element["x"]))
          // element.x = new Date(element["x"])
          //element.x = [element["x"].getFullYear(),element["x"].getMonth()+1,element["x"].getDate()].join('-')
        });
        this.candleData = this.candleData.slice(this.candleData.length - 365);
        this.setCandleChart(this.candleData);
      });
    //this.setCandleChart(aciData);
  }
  setCandleChart(seriesData: any) {
    //  console.log(seriesData.length)
    //  seriesData.forEach((element:any) => {
    //   let momObject = moment(element["x"], "DD/MM/YYYY");
    //   element.x = (momObject.toDate());
    //   element.x.setDate(element.x.getDate()+1);
    //   // console.log(new Date(element["x"]))
    //   // element.x = new Date(element["x"])
    //   //element.x = [element["x"].getFullYear(),element["x"].getMonth()+1,element["x"].getDate()].join('-')
    //  });

    this.candlestickChart = {
      series: [
        {
          name: 'Price',
          type: 'candlestick',
          data: seriesData,
        },
      ],
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'Stock price',
        align: 'center',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: [
        {
          labels: {
            formatter: function (val: any) {
              if (val) return val.toFixed(2);
            },
          },
          tooltip: {
            enabled: true,
          },
        },
      ],
    };
    this.dataReady = true;
  }
}
