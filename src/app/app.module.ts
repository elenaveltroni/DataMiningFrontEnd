import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

// @ts-ignore
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { CreateAcquisitionComponent } from './create-acquisition/create-acquisition.component';
import { TextAnalysisComponent } from './text-analysis/text-analysis.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { KeywordComponent } from './keyword/keyword.component';
import { TrainProcessComponent } from './train-process/train-process.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthHttp} from 'angular2-jwt';
import {Service} from './services/Service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAcquisitionComponent,
    TextAnalysisComponent,
    AnalyticsComponent,
    KeywordComponent,
    TrainProcessComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    Service,
    {
    provide: AuthHttp
    },
  ],
  exports: [
    RouterModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
