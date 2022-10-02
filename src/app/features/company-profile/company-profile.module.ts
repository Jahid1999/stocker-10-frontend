import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { TecIndicatorTableComponent } from './tec-indicator-table/tec-indicator-table.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { DataTablesModule } from 'angular-datatables';
import { NewsComponent } from './news/news.component';
import { MarketSummaryComponent } from './market-summary/market-summary.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SharePatternComponent } from './share-pattern/share-pattern.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OtherIndicatorsComponent } from './other-indicators/other-indicators.component';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";

// @ts-ignore
@NgModule({
  declarations: [
    CompanyProfileIndexComponent,
    TecIndicatorTableComponent,
    ComparisonTableComponent,
    NewsComponent,
    MarketSummaryComponent,
    SharePatternComponent,
    OtherIndicatorsComponent,
    ProfileCardComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    DataTablesModule,
    MatTableModule,
    NgApexchartsModule,
    MatButtonModule,
  ],
  exports: [CompanyProfileIndexComponent],
})
export class CompanyProfileModule {}
