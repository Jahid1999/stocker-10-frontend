import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import {TodayDataComponent} from './components/today-data/today-data.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeIndexComponent,
    TodayDataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
