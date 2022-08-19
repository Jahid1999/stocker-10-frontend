import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeIndexComponent,
    BarChartComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
