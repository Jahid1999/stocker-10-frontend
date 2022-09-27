import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { TecIndicatorTableComponent } from './tec-indicator-table/tec-indicator-table.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { DataTablesModule } from 'angular-datatables';
import { NewsComponent } from './news/news.component';
import { SharePatternComponent } from './share-pattern/share-pattern.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CompanyProfileIndexComponent,
    TecIndicatorTableComponent,
    ComparisonTableComponent,
    NewsComponent,
    SharePatternComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    DataTablesModule,
    MatTableModule,
    NgApexchartsModule,
  ],
  exports: [CompanyProfileIndexComponent],
})
export class CompanyProfileModule {}
