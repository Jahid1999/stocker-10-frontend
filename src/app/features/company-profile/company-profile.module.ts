import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { TecIndicatorTableComponent } from './tec-indicator-table/tec-indicator-table.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    CompanyProfileIndexComponent,
    TecIndicatorTableComponent,
    ComparisonTableComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    DataTablesModule
  ],
  exports: [
    CompanyProfileIndexComponent
  ]
})
export class CompanyProfileModule { }
