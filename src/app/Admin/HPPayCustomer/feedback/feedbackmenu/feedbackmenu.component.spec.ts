import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackmenuComponent } from './feedbackmenu.component';

describe('FeedbackmenuComponent', () => {
  let component: FeedbackmenuComponent;
  let fixture: ComponentFixture<FeedbackmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
