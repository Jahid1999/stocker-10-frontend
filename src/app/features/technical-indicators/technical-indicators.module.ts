import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BbGraphComponent } from '../company-profile/bb-graph/bb-graph.component';
import { CandleSeriesService, ChartModule, LineSeriesService, BollingerBandsService, DateTimeService, RangeAreaSeriesService } from '@syncfusion/ej2-angular-charts';
import { TechnicalIndicatorIndexComponent } from './technical-indicator-index/technical-indicator-index.component';


@NgModule({
  declarations: [
    // BbGraphComponent,
    TechnicalIndicatorIndexComponent,
    
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [TechnicalIndicatorIndexComponent],
  providers: [ CandleSeriesService, LineSeriesService, BollingerBandsService, DateTimeService, RangeAreaSeriesService]
})
export class TechnicalIndicatorsModule { }
