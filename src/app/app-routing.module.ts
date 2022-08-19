import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PieChartComponent} from "./features/home/components/pie-chart/pie-chart.component";

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  { path: 'pie', component: PieChartComponent, canActivate : [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
