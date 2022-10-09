import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CompanyGraphModule } from './features/company-graph/company-graph.module';
import { CompanyProfileModule } from './features/company-profile/company-profile.module';
import { HomeModule } from './features/home/home.module';
import { DatePipe } from '@angular/common';
// import { FaqComponent } from './features/faq/faq.component';
import { FaqModule } from './features/faq/faq.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    CompanyProfileModule,
    CompanyGraphModule,
    CoreModule,
    HttpClientModule,
    FaqModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
