import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphRoutingModule } from './graph-routing.module';
import { GraphIndexComponent } from './graph-index/graph-index.component';



@NgModule({
  declarations: [    GraphIndexComponent],
  imports: [
    CommonModule,
    GraphRoutingModule,
  ],
  exports:[GraphIndexComponent]
})
export class GraphModule { }
