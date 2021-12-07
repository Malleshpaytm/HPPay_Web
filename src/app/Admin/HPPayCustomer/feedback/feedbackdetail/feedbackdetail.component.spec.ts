import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackdetailComponent } from './feedbackdetail.component';

describe('FeedbackdetailComponent', () => {
  let component: FeedbackdetailComponent;
  let fixture: ComponentFixture<FeedbackdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
