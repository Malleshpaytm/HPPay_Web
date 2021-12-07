import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportmailinfoComponent } from './reportmailinfo.component';

describe('ReportmailinfoComponent', () => {
  let component: ReportmailinfoComponent;
  let fixture: ComponentFixture<ReportmailinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportmailinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportmailinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
