import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TESTTYPES } from '../constants/test-types';
import { IInterpretation, ISample, ITestParameter, ITestParameterWithoutRange } from '../models/sample.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../toast.service';
import { IDoctor } from '../models/doctor.model';
import { DOCTORS } from '../constants/doctors-list';
import { NgbTypeahead, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-sample-report',
  templateUrl: './sample-report.component.html',
  styleUrls: ['./sample-report.component.css'],
})
export class SampleReportComponent implements OnInit {
  @ViewChildren('td') cells: QueryList<ElementRef>;
  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  testTypes: ISample[] = TESTTYPES;
  filteredTestTypes: ISample[] = TESTTYPES;
  doctors: IDoctor[] = DOCTORS;
  sampleForm: FormGroup;
  reportId: string | null = null;
  reportData: any;
  url: string | ArrayBuffer | null;
  @HostListener('document:keydown.control.r')
  openReportShortcut() { this.openReport('../report-withheaderfooter'); }

  @HostListener('document:keydown.alt.s')
  saveReport() { this.onSubmit(this.sampleForm.value); }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public toastService: ToastService,
    config: NgbTypeaheadConfig) {
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reportId = params.get('reportId');
    });

    if (this.reportId != "0") {
      const reports = JSON.parse(localStorage.getItem('reports') ?? '[]');
      const reportData = (reports as any[]).find(x => x.reportId == this.reportId);
      this.reportData = reportData.value;
      console.log(this.reportData);
    }

    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 16);

    this.sampleForm = this.formBuilder.group({
      searchTest: new FormControl(),
      testType: new FormControl("0"),
      reportName: new FormControl(),
      petName: new FormControl(),
      source: new FormControl(),
      species: new FormControl(),
      nameOfOwner: new FormControl(),
      breed: new FormControl(),
      nameOfDoctor: new FormControl(),
      sex: new FormControl(),
      sampleReceivedOn: new FormControl(localISOTime),
      ageYears: new FormControl(),
      ageMonths: new FormControl(),
      reportedOn: new FormControl(localISOTime),
      patientId: new FormControl(),
      labNo: new FormControl(),
      parameters: this.formBuilder.array([]),
      interpretations: this.formBuilder.array([]),
      parametersWithoutRange: this.formBuilder.array([]),
      comments: new FormControl(),
      imageUrl: new FormControl()
    });

    this.f.searchTest.valueChanges.subscribe(testName => {
      this.filteredTestTypes = this.testTypes.filter(option => option.displayName.toLowerCase().includes(testName?.toLowerCase()));
    });

    this.f.testType.valueChanges.subscribe(testId => {
      this.getClauseListComponent(testId);
    });

    this.f.nameOfDoctor.valueChanges.subscribe(doctor => {
      this.f.source.setValue(doctor.clinicName);
    });

    this.getClauseListComponent(["0"]);

    this.sampleForm.patchValue(this.reportData);
  }

  getClauseListComponent(testIds: string[]): void {
    const testsFormArrayControl = this.parametersFormArray();
    testsFormArrayControl.clear();
    const interpretationsFormArrayControl = this.interpretationsFormArray();
    interpretationsFormArrayControl.clear();
    const testsWithoutRangeFormArrayControl = this.parametersWithoutRangeFormArray();
    testsWithoutRangeFormArrayControl.clear();

    this.imageUrlFormControl().setValue('');
    this.url = '';

    const selectedTests = this.testTypes.filter(x => testIds.includes(x.id));
    let selectedTest: ISample = <ISample>{};
    if (selectedTests.length > 0) {
      selectedTest = selectedTests?.reduce(
        (prev, current) => {
          return prev.parameters?.length > current.parameters?.length ? prev : current
        }
      );
    }
    this.reportNameFormControl().setValue(selectedTest?.name);

    this.commentsFormControl().setValue(selectedTest?.comments);

    selectedTests?.forEach(test => {
      test.parameters?.forEach(listItem => {
        const item = this.GetParameterFormControlGroup(listItem);
        testsFormArrayControl.push(item);
      });

      test.interpretations?.forEach(listItem => {
        const item = this.GetInterpretationFormControlGroup(listItem);
        interpretationsFormArrayControl.push(item);
      });

      test.parametersWithoutRange?.forEach(listItem => {
        const item = this.GetParameterWithoutRangeFormControlGroup(listItem);
        testsWithoutRangeFormArrayControl.push(item);
      });
    });
  }


  private GetParameterFormControlGroup(listItem: ITestParameter) {
    return this.formBuilder.group({
      id: listItem.id,
      name: listItem.name,
      isHeading: listItem.isHeading,
      units: listItem.units,
      lowRangeValue: listItem.lowRangeValue,
      highRangeValue: listItem.highRangeValue,
      result: [{ value: listItem.result, disabled: listItem.isHeading }],
    });
  }

  private GetInterpretationFormControlGroup(listItem: IInterpretation) {
    return this.formBuilder.group({
      id: listItem.id,
      name: listItem.name,
      isHeading: listItem.isHeading,
      result: [{ value: listItem.result, disabled: listItem.isHeading }],
      expectedResult: listItem.expectedResult
    });
  }

  private GetParameterWithoutRangeFormControlGroup(listItem: ITestParameterWithoutRange) {
    return this.formBuilder.group({
      id: listItem.id,
      name: listItem.name,
      isHeading: listItem.isHeading,
      result: [{ value: listItem.result, disabled: listItem.isHeading }],
    });
  }

  get f() { return this.sampleForm.controls; }

  parametersFormArray(): FormArray {
    return this.sampleForm.get("parameters") as FormArray
  }

  interpretationsFormArray(): FormArray {
    return this.sampleForm.get("interpretations") as FormArray
  }

  parametersWithoutRangeFormArray(): FormArray {
    return this.sampleForm.get("parametersWithoutRange") as FormArray
  }

  reportNameFormControl(): FormControl {
    return this.sampleForm.get("reportName") as FormControl
  }

  commentsFormControl(): FormControl {
    return this.sampleForm.get("comments") as FormControl
  }

  imageUrlFormControl(): FormControl {
    return this.sampleForm.get("imageUrl") as FormControl
  }

  addTestParameter() {
    const testParameters = this.parametersFormArray();
    const item = this.GetParameterFormControlGroup(<ITestParameter>{})
    testParameters.push(item);
  }

  removeTestParameter(index: number) {
    const testParameters = this.parametersFormArray();
    testParameters.removeAt(index);
  }

  addInterpretationParameter() {
    const interpretations = this.sampleForm.get(['interpretations']) as FormArray;
    const item = this.GetInterpretationFormControlGroup(<IInterpretation>{});
    interpretations.push(item);
  }

  removeInterpretationParameter(index: number) {
    const interpretations = this.sampleForm.get(['interpretations']) as FormArray;
    interpretations.removeAt(index);
  }

  addParameterWithoutRange() {
    const testParameters = this.parametersWithoutRangeFormArray();
    const item = this.GetParameterWithoutRangeFormControlGroup(<ITestParameterWithoutRange>{});
    testParameters.push(item);
  }

  removeParameterWithoutRange(index: number) {
    const testParameters = this.parametersWithoutRangeFormArray();
    testParameters.removeAt(index);
  }

  openReport(url: string) {
    console.log(this.sampleForm.value);
    console.log("json", JSON.stringify(this.sampleForm.value));
    localStorage.setItem('reportresult', JSON.stringify(this.sampleForm.value));
    window.open(url, "_blank");
  }

  onSubmit(value: any) {
    const reports = JSON.parse(localStorage.getItem('reports') ?? '[]');

    if (this.reportId == "0") {
      const maxReportId = +(localStorage.getItem('maxreportid') ?? '0') + 1;
      localStorage.setItem('maxreportid', maxReportId.toString());
      reports.push({ reportId: maxReportId, value: value });
      this.reportId = maxReportId.toString();
    }
    else {
      const reportData = (reports as any[]).find(x => x.reportId == this.reportId);
      reportData.value = value;
    }
    localStorage.setItem('reports', JSON.stringify(reports));
    this.toastService.show('Report saved successfully', { classname: 'bg-success text-light', delay: 10000 });
  }

  onKeydown(e: any) {
    let cellsArray = this.cells.toArray();
    const idx = cellsArray.findIndex(z => z.nativeElement.children[0] === e.target);
    cellsArray[idx + 1].nativeElement.children[0].focus();
  }

  onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastService.show('Only images are supported.', { classname: 'bg-danger text-light', delay: 10000 });
      return;
    }

    const reader = new FileReader();
    //this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      this.imageUrlFormControl().setValue(this.url);
    }

    // Clear the input
    event.target.value = null;
  }

  doctorFormatter = (x: { name: string }) => x.name;

  searchDoctor = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance?.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.doctors
        : this.doctors.filter(dr => dr.name?.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  }
}

