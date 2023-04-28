import { SampleReportComponent } from './sample-report/sample-report.component';
import { ReportPlainComponent } from './report-plain/report-plain.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportWithheaderfooterComponent } from './report-withheaderfooter/report-withheaderfooter.component';
import { ReportsComponent } from './reports/reports.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reports',
    pathMatch: 'full'
  },
  {
    path: '', component: NavMenuComponent,
    children: [
      { path: 'reports', component: ReportsComponent },
      { path: 'create-report/:reportId', component: SampleReportComponent }
    ]
  },
  { path: 'report-plain', component: ReportPlainComponent },
  { path: 'report-withheaderfooter', component: ReportWithheaderfooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
