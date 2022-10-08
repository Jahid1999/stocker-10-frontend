import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TechnicalIndicatorIndexComponent } from './technical-indicator-index/technical-indicator-index.component';

const routes: Routes = [
  {
    path: '',
    component: TechnicalIndicatorIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalIndicatorRoutingModule { }
