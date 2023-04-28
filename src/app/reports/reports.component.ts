import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: any[];
  listedReports: any[];

  page = 1;
  pageSize = 4;
  collectionSize: number;

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
    this.getReports();
  }

  refreshReports() {
    this.listedReports = this.reports
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getReports(): void {
    this.reports = JSON.parse(localStorage.getItem('reports') ?? '[]');
  }

  deleteReport(reportId: string): void {
    let index = this.reports.findIndex(x => x.reportId == reportId);
    this.reports.splice(index, 1);
    this.collectionSize = this.reports.length;
    this.refreshReports();
    localStorage.setItem('reports', JSON.stringify(this.reports));
    this.toastService.show('Report deleted successfully', { classname: 'bg-success text-light', delay: 10000 });
  }
}
