import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalMenuComponent } from './approval-menu.component';

describe('ApprovalMenuComponent', () => {
  let component: ApprovalMenuComponent;
  let fixture: ComponentFixture<ApprovalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
