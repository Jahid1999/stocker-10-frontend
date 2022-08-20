import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { HomeTableComponent } from './features/home/components/home-table/home-table.component';
import { BrowserModule } from '@angular/platform-browser';
import {NgApexchartsModule} from "ng-apexcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryCompareComponent } from './feature/components/category-compare/category-compare.component';
import { PieChartComponent } from './features/home/components/pie-chart/pie-chart.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { HomeModule } from './features/home/home.module';
import { TradeStatBarchartComponent } from './features/home/components/trade-stat-barchart/trade-stat-barchart.component';
import { CoreModule } from './core/core.module';
import { TodayDataComponent } from './features/home/components/today-data/today-data.component';
import { GainerLooserComponent } from './homepage/gainer-looser/gainer-looser.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeTableComponent,
    PieChartComponent,
    AppComponent,
    TradeStatBarchartComponent,
    TodayDataComponent,
    CategoryCompareComponent,
    GainerLooserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule,
    HomeModule,
    HttpClientModule,
    HomeModule,
    CoreModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
