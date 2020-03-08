import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

// @ts-ignore
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateAcquisitionComponent } from './create-acquisition/create-acquisition.component';
import { TextAnalysisComponent } from './text-analysis/text-analysis.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { KeywordComponent } from './keyword/keyword.component';
import { TrainProcessComponent } from './train-process/train-process.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthHttp} from 'angular2-jwt';
import {Service} from './services/Service';
import { ResultComponent } from './text-analysis/result/result.component';
import { PhraseResultComponent } from './train-process/phrase-result/phrase-result.component';
import { TwitterResultComponent } from './train-process/twitter-result/twitter-result.component';
import { ClusterComponent } from './cluster/cluster.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAcquisitionComponent,
    TextAnalysisComponent,
    AnalyticsComponent,
    KeywordComponent,
    TrainProcessComponent,
    ResultComponent,
    PhraseResultComponent,
    TwitterResultComponent,
    ClusterComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
