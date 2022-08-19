import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GainerLooserComponent } from './homepage/gainer-looser/gainer-looser.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './homepage/table/table.component';
import { GraphComponent } from './graph/graph.component';
import { CompareComponent } from './graph/compare/compare.component';
import { TodaysDataComponent } from './graph/todays-data/todays-data.component'

@NgModule({
  declarations: [
    AppComponent,
    GainerLooserComponent,
    TableComponent,
    GraphComponent,
    CompareComponent,
    TodaysDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
