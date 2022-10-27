import { Component, OnInit, ViewChild } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import { SharePatternService } from './service/share-pattern.service';

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
  selector: 'app-share-pattern',
  templateUrl: './share-pattern.component.html',
  styleUrls: ['./share-pattern.component.scss'],
})
export class SharePatternComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public lineGraph: Partial<ChartOptions> | any;
  public pieChartOptions!: Partial<ChartOptions> | any;
  public company_code: any;
  public pieChartSeriesList: any = [];
  public pieChartLabelsList: any = [];
  public govt: any = [];
  public foreign: any = [];
  public institute: any = [];
  public public: any = [];
  public sponsorDirector: any = [];
  public monthList: any = [];
  public dataLoaded = false;
  public lineGraphData = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _sharePatternService: SharePatternService
  ) {}

  getSharePatternData() {
    let array = [];
    this._sharePatternService.getSharePattern(this.company_code).subscribe(
      (response: any) => {
        array = [...response];
        // console.log(array);
        this.setLineChart(array);
        this.setPieChart(array);
      },
      (error) => {
        console.log('error = ', error);
      }
    );
  }

  ngOnInit(): void {
    this.company_code = this.activatedRoute.snapshot.params['company-name'];
    this.getSharePatternData();
  }
  setLineChart(array: any) {
    array.reverse().forEach((item: any) => {
      const month = item['ShareHoldingPercentage'].split(' ')[0];
      const year = item['ShareHoldingPercentage'].split(' ')[2];
      // console.log(month+" "+year);
      this.govt.push(item['Govt']);
      this.foreign.push(item['Foreign']);
      this.institute.push(item['Institute']);
      this.public.push(item['Public']);
      this.sponsorDirector.push(item['SponsorDirector']);
      this.monthList.push(month + ' ' + year);
    });
    this.lineGraphData = true;
    this.lineGraph = {
      //"Foreign","Government","Institute", "Public Share","Directors",
      series: [
        {
          name: 'Foreign',
          data: this.foreign,
        },
        {
          name: 'Government',
          data: this.govt,
        },
        {
          name: 'Institute',
          data: this.institute,
        },
        {
          name: 'Public Share',
          data: this.public,
        },
        {
          name: 'Directors',
          data: this.sponsorDirector,
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        tooltipHoverFormatter: function (
          val: string,
          opts: {
            w: {
              globals: { series: { [x: string]: { [x: string]: string } } };
            };
            seriesIndex: string | number;
            dataPointIndex: string | number;
          }
        ) {
          return (
            val +
            ' - <strong>' +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            '</strong>'
          );
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: this.monthList,
      },
      yaxis: {
        title: {
          text: 'Share (Percentage)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
      grid: {
        borderColor: '#f1f1f1',
      },
      colors: ['#7FBCD2', '#FECD70', '#285E33', '#5E2828', '#284E5E'],
    };
  }

  setPieChart(array: any) {
    this.pieChartSeriesList.push(array[0]['Foreign']);
    this.pieChartSeriesList.push(array[0]['Govt']);
    this.pieChartSeriesList.push(array[0]['Institute']);
    this.pieChartSeriesList.push(array[0]['Public']);
    this.pieChartSeriesList.push(array[0]['SponsorDirector']);
    this.dataLoaded = true;
    this.pieChartOptions = {
      series: this.pieChartSeriesList,
      chart: {
        type: 'donut',
        height: 350,
        width: 350,
        stacked: true,
      },
      labels: [
        'Foreign',
        'Government',
        'Institute',
        'Public Share',
        'Directors',
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val.toFixed(2) + '%';
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
          },
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      legend: {
        show: false,
      },
      colors: ['#7FBCD2', '#FECD70', '#285E33', '#5E2828', '#284E5E'],
      fill: {
        colors: ['#7FBCD2', '#FECD70', '#285E33', '#5E2828', '#284E5E'],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  }
}
