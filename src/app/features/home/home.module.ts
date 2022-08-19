import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from './components/home-index/home-index.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeIndexComponent, 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    HttpClientModule
  ]
})
export class HomeModule { }
