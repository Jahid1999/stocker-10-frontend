import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PieChartComponent} from "./components/pie-chart/pie-chart.component";

const routes: Routes = [
  { path: 'pie', component: PieChartComponent, canActivate : [] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
