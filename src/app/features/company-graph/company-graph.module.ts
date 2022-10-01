import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyGraphIndexComponent } from './components/company-graph-index/company-graph-index.component';
import {CompanyGraphRoutingModule} from "../company-graph/company-graph-routing.module";

@NgModule({
  declarations: [
    CompanyGraphIndexComponent
  ],
  imports: [
    CommonModule,
    CompanyGraphRoutingModule,
  ],
  exports: [CompanyGraphIndexComponent],
})
export class CompanyGraphModule {}
