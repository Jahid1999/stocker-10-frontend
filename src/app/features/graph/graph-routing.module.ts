import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphIndexComponent } from './graph-index/graph-index.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GraphIndexComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GraphRoutingModule { }
