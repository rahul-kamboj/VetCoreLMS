import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleReportComponent } from './sample-report/sample-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportWithheaderfooterComponent } from './report-withheaderfooter/report-withheaderfooter.component';
import { ReportPlainComponent } from './report-plain/report-plain.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleReportComponent,
    ReportWithheaderfooterComponent,
    ReportPlainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
