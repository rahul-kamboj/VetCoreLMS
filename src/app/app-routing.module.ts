import { SampleReportComponent } from './sample-report/sample-report.component';
import { ReportPlainComponent } from './report-plain/report-plain.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SampleReportComponent },
  { path: 'report-plain', component: ReportPlainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
