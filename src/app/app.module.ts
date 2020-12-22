import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LiveTestsComponent } from './live-tests/live-tests.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { OrganizeComponent } from './organize/organize.component';
import { TestItemComponent } from './test-item/test-item.component';
import { TestService } from './test.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CandidateService } from './candidate.service';
import { StoredAnswersService } from './StoredAnswers.service';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { SorryComponent } from './sorry/sorry.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {ChartsModule} from 'ng2-charts';
import { ShowCandComponent } from './show-cand/show-cand.component';
import { ReportComponent } from './report/report.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CountdownTimerModule } from 'angular-countdown-timer';

 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveTestsComponent,
    TestComponent,
    HeaderComponent,
    DisplayQuestionComponent,
    OrganizeComponent,
    TestItemComponent,
    ResultComponent,
    StartComponent,
    SorryComponent,
    ShowCandComponent,
    ReportComponent,

  ],
  imports: [
  CountdownTimerModule.forRoot(),
  ChartsModule,
   NgxPaginationModule,
  //InfiniteScrollModule,
ScrollingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
 
    TestService, CandidateService, StoredAnswersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
