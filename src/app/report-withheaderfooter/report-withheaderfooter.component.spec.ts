import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportWithheaderfooterComponent } from './report-withheaderfooter.component';

describe('ReportWithheaderfooterComponent', () => {
  let component: ReportWithheaderfooterComponent;
  let fixture: ComponentFixture<ReportWithheaderfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportWithheaderfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportWithheaderfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
