import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleReportComponent } from './sample-report/sample-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportWithheaderfooterComponent } from './report-withheaderfooter/report-withheaderfooter.component';
import { ReportPlainComponent } from './report-plain/report-plain.component';
import { ReportsComponent } from './reports/reports.component';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    SampleReportComponent,
    ReportWithheaderfooterComponent,
    ReportPlainComponent,
    ReportsComponent,
    ToastsContainerComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
