import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistapprovalComponent } from './hotlistapproval.component';

describe('HotlistapprovalComponent', () => {
  let component: HotlistapprovalComponent;
  let fixture: ComponentFixture<HotlistapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlistapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlistapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
