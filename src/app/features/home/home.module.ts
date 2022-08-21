import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { TradeStatBarchartComponent } from './components/trade-stat-barchart/trade-stat-barchart.component';
import { HomeTableComponent } from './components/home-table/home-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    HomeIndexComponent,
    TradeStatBarchartComponent,
    HomeTableComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgApexchartsModule,
    DataTablesModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    TradeStatBarchartComponent,
    HomeTableComponent,
    PieChartComponent,
  ]
})
export class HomeModule { }
