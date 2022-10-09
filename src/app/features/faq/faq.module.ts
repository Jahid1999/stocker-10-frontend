import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq-index/faq.component';
import { FaqRoutingModule } from './faq-routing.module';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
  ],
  exports: [
    FaqComponent
  ],
})
export class FaqModule {}
