import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';
import { OtherIndicatorsService } from '../../services/other-indicators.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-other-indicators',
  templateUrl: './other-indicators.component.html',
  styleUrls: ['./other-indicators.component.scss'],
})
export class OtherIndicatorsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  public company_code: any;
  public isGraphReady: any = false;
  public dates: any = [];
  public DYValues: any = [];
  public MACDValues: any = [];
  public PERATIOValues: any = [];

  constructor(
    private route: ActivatedRoute,
    private otherIndicatorsService: OtherIndicatorsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    // this.setBarChartData();
    this.company_code = this.route.snapshot.paramMap.get('company-name');
    this.otherIndicatorsService
      .getOtherIndicatorsData(this.company_code)
      .subscribe(
        (response: any) => {
          if (response) {
            this.processingTheData(response);
            // console.log(this.dates);
            // console.log(this.DYValues);
            // console.log(this.MACDValues);
            // console.log(this.PERATIOValues);
            this.setBarChartData();
            this.isGraphReady = true;
          }
        },
        (error: any) => {
          console.log(error.message);
        }
      );
  }

  processingTheData(data: any) {
    for (let key in data) {
      let date = this.datePipe.transform(key, 'dd MMM yyyy');
      this.dates.push(date);
      this.DYValues.push(data[key][0].toFixed(2));
      this.MACDValues.push(data[key][1].toFixed(2));
      this.PERATIOValues.push(data[key][2].toFixed(2));
    }
  }

  setBarChartData() {
    this.chartOptions = {
      title: {
        text: 'Other Indicators (Ratio)',
      },
      colors: ['#285E33', '#5E2828', '#284E5E'],
      series: [
        {
          name: 'DIVIDENT YIELD',
          data: this.DYValues,
        },
        {
          name: 'PE RATIO',
          data: this.PERATIOValues,
        },
        {
          name: 'MACD',
          data: this.MACDValues,
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          borderRadius: 2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: this.dates,
      },
      yaxis: {
        title: {
          text: '',
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
      legend: {
        position: 'top',
      },
    };
  }
}
