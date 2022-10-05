import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SliderComponent } from './components/slider/slider/slider.component';
import { InnerContentComponent } from './components/slider/inner-content/inner-content.component';
import { DuplicateDirective } from './directives/duplicate.directive';
import { SliderService } from './services/slider.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    InnerContentComponent,
    DuplicateDirective
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    InnerContentComponent,
    DuplicateDirective,
  ],
  providers:[
    SliderService
  ]
})
export class CoreModule { }
