import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyGraphIndexComponent } from './components/company-graph-index/company-graph-index.component';
import { CompanyGraphRoutingModule } from '../company-graph/company-graph-routing.module';
import { ObvGraphComponent } from './components/obv-graph/obv-graph.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { BbGraphComponent } from './bb-graph/bb-graph.component';
import * as CanvasJSAngularChart from 'src/assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { MACDComponent } from './components/macd/macd.component';
import {SmaGraphComponent } from './components/sma-graph/sma-graph.component';
import { ComBbGraphComponent } from './com-bb-graph/com-bb-graph.component';

@NgModule({
  declarations: [
    CompanyGraphIndexComponent,
    ObvGraphComponent,
    BbGraphComponent,
    CanvasJSChart,
    MACDComponent,
    SmaGraphComponent,
    ComBbGraphComponent,
  ],
  imports: [
    CommonModule,
    CompanyGraphRoutingModule,
    NgApexchartsModule,
  ],
  exports: [CompanyGraphIndexComponent],
})
export class CompanyGraphModule {}
