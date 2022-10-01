import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyGraphIndexComponent } from './components/company-graph-index/company-graph-index.component';
import {CompanyGraphRoutingModule} from "../company-graph/company-graph-routing.module";
import { ObvGraphComponent } from './components/obv-graph/obv-graph.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { SmaGraphComponent } from './components/sma-graph/sma-graph.component';

@NgModule({
  declarations: [
    CompanyGraphIndexComponent,
    ObvGraphComponent,
    SmaGraphComponent
  ],
  imports: [
    CommonModule,
    CompanyGraphRoutingModule,
    NgApexchartsModule,
  ],
  exports: [CompanyGraphIndexComponent],
})
export class CompanyGraphModule {}
