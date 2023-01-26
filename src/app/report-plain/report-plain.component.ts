import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-plain',
  templateUrl: './report-plain.component.html',
  styleUrls: ['./report-plain.component.css']
})
export class ReportPlainComponent implements OnInit {
  formValue: any;

  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('reportresult') ?? '');
  }

}
