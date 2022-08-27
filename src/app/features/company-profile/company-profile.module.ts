import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';



@NgModule({
  declarations: [
    CompanyProfileIndexComponent
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule
  ],
  exports: [
    CompanyProfileIndexComponent
  ]
})
export class CompanyProfileModule { }
