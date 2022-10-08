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
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import { HealthSliderComponent } from './health-slider/components/health-slider/health-slider.component';
import { HealthSliderDuplicateDirective } from './health-slider/directives/health-slider-duplicate.directive';
import { HealthSliderInnerContentComponent } from './health-slider/components/health-slider-inner-content/health-slider-inner-content.component';
import {OtherIndicatorsComponent} from "./other-indicators/components/other-indicators/other-indicators.component";

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
    HealthSliderComponent,
    HealthSliderDuplicateDirective,
    HealthSliderInnerContentComponent,
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    DataTablesModule,
    MatTableModule,
    NgApexchartsModule,
    MatButtonModule,
  ],
  exports: [
    CompanyProfileIndexComponent,
    HealthSliderDuplicateDirective,
  ],
})
export class CompanyProfileModule {}
