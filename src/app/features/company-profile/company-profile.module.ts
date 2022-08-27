import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { SharePatternComponent } from './share-pattern/share-pattern.component';
import {NgApexchartsModule} from "ng-apexcharts";



@NgModule({
  declarations: [
    CompanyProfileIndexComponent,
    SharePatternComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    NgApexchartsModule
  ],
  exports: [
    CompanyProfileIndexComponent
  ]
})
export class CompanyProfileModule { }
