import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { FaqComponent } from './faq.component';
// @ts-ignore

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule],
  exports: [ChartModule],
  providers: [],
})
export class FaqModule {}
