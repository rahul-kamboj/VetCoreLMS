import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-withheaderfooter',
  templateUrl: './report-withheaderfooter.component.html',
  styleUrls: ['./report-withheaderfooter.component.css']
})
export class ReportWithheaderfooterComponent implements OnInit {
  formValue: any;

  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('reportresult') ?? '');
  }

}
