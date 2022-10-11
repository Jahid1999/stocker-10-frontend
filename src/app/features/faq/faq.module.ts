import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqComponent} from './faq-index/faq.component';
import {FaqRoutingModule} from './faq-routing.module';
import {MatTreeModule} from "@angular/material/tree";
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [FaqComponent, IndexComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    FaqRoutingModule
  ],
  exports: [
    IndexComponent
  ],
})
export class FaqModule {
}
