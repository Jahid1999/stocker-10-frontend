import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyGraphIndexComponent } from './components/company-graph-index/company-graph-index.component';
import {CompanyGraphRoutingModule} from "../company-graph/company-graph-routing.module";
import { ObvGraphComponent } from './components/obv-graph/obv-graph.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { MACDComponent } from './components/macd/macd.component'

@NgModule({
  declarations: [
    CompanyGraphIndexComponent,
    ObvGraphComponent,
    MACDComponent,
  ],
  imports: [
    CommonModule,
    CompanyGraphRoutingModule,
    NgApexchartsModule,
  ],
  exports: [CompanyGraphIndexComponent],
})
export class CompanyGraphModule {}