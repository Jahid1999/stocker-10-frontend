import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
const routes: Routes = [
  {
    path: ':company-name',
    component: CompanyProfileIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyProfileRoutingModule { }
