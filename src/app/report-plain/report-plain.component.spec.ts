import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPlainComponent } from './report-plain.component';

describe('ReportPlainComponent', () => {
  let component: ReportPlainComponent;
  let fixture: ComponentFixture<ReportPlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPlainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
