import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CompanyProfileModule } from './features/company-profile/company-profile.module';
import { GraphModule } from './features/graph/graph.module';
import { HomeModule } from './features/home/home.module';
import { TechnicalIndicatorsModule } from './features/technical-indicators/technical-indicators.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    CompanyProfileModule,
    TechnicalIndicatorsModule,
    CoreModule,
    HttpClientModule,
    GraphModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
