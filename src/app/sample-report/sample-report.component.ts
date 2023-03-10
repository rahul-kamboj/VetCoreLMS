import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { testTypes } from '../constants/test-types';
import { ISample } from '../models/sample.model';

@Component({
  selector: 'app-sample-report',
  templateUrl: './sample-report.component.html',
  styleUrls: ['./sample-report.component.css'],
})
export class SampleReportComponent implements OnInit {
  testTypes: ISample[] = testTypes;
  sampleForm: FormGroup;
  // selectedTestId: string = "1";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 16);

    this.sampleForm = this.formBuilder.group({
      testType: new FormControl("1"),
      petName: new FormControl(),
      source: new FormControl(),
      species: new FormControl(),
      nameOfOwner: new FormControl(),
      breed: new FormControl(),
      nameOfDoctor: new FormControl(),
      sex: new FormControl(),
      sampleReceivedOn: new FormControl(localISOTime),
      age: new FormControl(),
      reportedOn: new FormControl(localISOTime),
      patientId: new FormControl(),
      labNo: new FormControl(),
      tests: this.formBuilder.array([]),
    });

    this.f.testType.valueChanges.subscribe(x => {
      this.getClauseListComponent();
    });

    this.getClauseListComponent();
  }

  getClauseListComponent(): void {
    const selectedTestId = this.sampleForm.value.testType;
    const tests = this.sampleForm.get(['tests']) as FormArray;
    tests.clear();
    const selectedTest = this.testTypes.find(x => x.id == selectedTestId);
    selectedTest?.tests.forEach(listItem => {
      const item = this.formBuilder.group({
        id: listItem.id,
        testName: listItem.testName,
        units: listItem.units,
        lowRangeValue: listItem.lowRangeValue,
        highRangeValue: listItem.highRangeValue,
        result: listItem.result,
        up: listItem.up,
        down: listItem.down,
      });
      tests.push(item);
    });
  }


  get f() { return this.sampleForm.controls; }

  tests() : FormArray {
    return this.sampleForm.get("tests") as FormArray
  }

  addTestParameter(){
    const tests = this.sampleForm.get(['tests']) as FormArray;
    const item = this.formBuilder.group({
      id: "",
      testName: "New Parameter",
      units: "",
      lowRangeValue: "",
      highRangeValue: "",
      result: "",
      up: "",
      down: "",
    });
    tests.push(item);
  }

  removeTestParameter(index:number){
    const tests = this.sampleForm.get(['tests']) as FormArray;
    tests.removeAt(index);
  }

  passObject(){
    localStorage.setItem('reportresult', JSON.stringify(this.sampleForm.value));
  }

  onSubmit(value:any){

  }
}
