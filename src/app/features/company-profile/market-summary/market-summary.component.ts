import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { dataSeries } from './data-series';
import { MarketSummaryService } from './service/market-summary.service';
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
  selector: 'app-market-summary',
  templateUrl: './market-summary.component.html',
  styleUrls: ['./market-summary.component.scss'],
})
export class MarketSummaryComponent implements OnInit {
  constructor(private summaryService: MarketSummaryService) {}
  @Input() companyCode = '';
  @ViewChild('chart') chart: ChartComponent | any;
  public lineGraph: Partial<ChartOptions> | any;
  slide: any = 0;
  id = '0';
  marketSummary: any = {};
  graphReady = false;

  ngOnInit(): void {
    this.setLineChart();
    this.loadData();
  }

  loadData() {
    this.summaryService.getMarketSummary(this.companyCode).subscribe((data) => {
      this.marketSummary = data;
      // console.log(data)
    });
  }

  setLineChart() {
    let dates: any = [];
    // let ts2 = 1484418600000;
    // let dates = [];
    // for (let i = 0; i < 120; i++) {
    //   ts2 = ts2 + 86400000;
    //   dates.push([ts2, dataSeries[1][i].value]);
    // }
    // console.log("dates = ",dates);
    this.summaryService
      .getGraphData(this.companyCode)
      .subscribe((data: any) => {
        // console.log(data.length)
        for (let i = 0; i < data.length; i++) {
          //console.log(data[i].date)
          let momObject = moment(data[i].date, 'DD/MM/YYYY');
          dates.push([momObject.toDate().getTime(), data[i].Close]);
        }
        // console.log(dates)
        this.lineGraph = {
          series: [
            {
              name: 'Price',
              data: dates,
            },
          ],
          chart: {
            height: 350,
            type: 'area',
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            colors: ['#4287f5'],
            width: 2,
          },

          markers: {
            size: 0,
            hover: {
              sizeOffset: 6,
            },
          },
          yaxis: {
            labels: {
              formatter: function (val: any) {
                return val.toFixed(2);
              },
            },
            title: {
              text: 'Price',
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
              opacityTo: 0.6,
              stops: [0, 90, 100],
            },
          },
          grid: {
            borderColor: '#f1f1f1',
          },
        };
        this.graphReady = true;
      });
  }

  next() {
    if (this.slide < 1) this.slide++;
  }

  previous() {
    if (this.slide > 0) this.slide--;
  }
}
