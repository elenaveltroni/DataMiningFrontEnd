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
import { ModalKeywordComponent } from './keyword/modal-keyword/modal-keyword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAcquisitionComponent,
    TextAnalysisComponent,
    AnalyticsComponent,
    KeywordComponent,
    TrainProcessComponent,
    ModalKeywordComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
