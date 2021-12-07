import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerfeedbackComponent } from './viewcustomerfeedback.component';

describe('ViewcustomerfeedbackComponent', () => {
  let component: ViewcustomerfeedbackComponent;
  let fixture: ComponentFixture<ViewcustomerfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcustomerfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
