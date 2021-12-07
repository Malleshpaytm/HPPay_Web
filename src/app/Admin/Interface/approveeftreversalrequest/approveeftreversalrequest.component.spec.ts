import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveeftreversalrequestComponent } from './approveeftreversalrequest.component';

describe('ApproveeftreversalrequestComponent', () => {
  let component: ApproveeftreversalrequestComponent;
  let fixture: ComponentFixture<ApproveeftreversalrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveeftreversalrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveeftreversalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
