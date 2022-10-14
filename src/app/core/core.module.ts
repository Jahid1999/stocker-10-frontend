import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SliderComponent} from './components/slider/slider/slider.component';
import {InnerContentComponent} from './components/slider/inner-content/inner-content.component';
import {DuplicateDirective} from './directives/duplicate.directive';
import {SliderService} from './services/slider.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

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
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    InnerContentComponent,
    DuplicateDirective,
  ],
  providers: [
    SliderService
  ]
})
export class CoreModule {
}
