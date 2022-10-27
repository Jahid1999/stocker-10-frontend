import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { TradeStatBarchartComponent } from './components/trade-stat-barchart/trade-stat-barchart.component';
import { HomeTableComponent } from './components/home-table/home-table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { TodayDataComponent } from './components/today-data/today-data.component';
import { CategoryCompareComponent } from './components/category-compare/category-compare.component';
import { GainerLooserComponent } from './components/gainer-looser/gainer-looser.component';
import { FaqModule } from '../faq/faq.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeIndexComponent,
    TradeStatBarchartComponent,
    HomeTableComponent,
    TodayDataComponent,
    CategoryCompareComponent,
    GainerLooserComponent,
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
    HttpClientModule,
    FaqModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports: [
    TradeStatBarchartComponent,
    HomeTableComponent,
    TodayDataComponent,
    CategoryCompareComponent,
    GainerLooserComponent,
  ],
})
export class HomeModule {}
