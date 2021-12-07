import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportconfigurationComponent } from './reportconfiguration.component';

describe('ReportconfigurationComponent', () => {
  let component: ReportconfigurationComponent;
  let fixture: ComponentFixture<ReportconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportconfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
