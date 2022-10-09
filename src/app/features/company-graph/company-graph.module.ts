import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyGraphIndexComponent } from './components/company-graph-index/company-graph-index.component';
import { CompanyGraphRoutingModule } from '../company-graph/company-graph-routing.module';
import { ObvGraphComponent } from './components/obv-graph/obv-graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MACDComponent } from './components/macd/macd.component';
import { StochasticOscillatorComponent } from './components/stochastic-oscillator/stochastic-oscillator.component';
import { SmaGraphComponent } from './components/sma-graph/sma-graph.component';
import { AdmGraphComponent } from './components/adm-graph/adm-graph.component';
import { RsiGraphComponent } from './components/rsi-graph/rsi-graph.component';
import * as CanvasJSAngularChart from 'src/assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { ComBbGraphComponent } from './components/com-bb-graph/com-bb-graph.component';

@NgModule({
  declarations: [
    CompanyGraphIndexComponent,
    ObvGraphComponent,
    CanvasJSChart,
    MACDComponent,
    StochasticOscillatorComponent,
    SmaGraphComponent,
    AdmGraphComponent,
    RsiGraphComponent,
    ComBbGraphComponent,
  ],
  imports: [CommonModule, CompanyGraphRoutingModule, NgApexchartsModule],
  exports: [CompanyGraphIndexComponent],
})
export class CompanyGraphModule {}
