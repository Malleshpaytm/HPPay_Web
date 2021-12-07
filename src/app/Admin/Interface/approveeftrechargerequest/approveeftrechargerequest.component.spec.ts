import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveeftrechargerequestComponent } from './approveeftrechargerequest.component';

describe('ApproveeftrechargerequestComponent', () => {
  let component: ApproveeftrechargerequestComponent;
  let fixture: ComponentFixture<ApproveeftrechargerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveeftrechargerequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveeftrechargerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
