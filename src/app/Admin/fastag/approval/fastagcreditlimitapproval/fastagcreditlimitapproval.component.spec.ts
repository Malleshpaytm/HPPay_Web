import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastagcreditlimitapprovalComponent } from './fastagcreditlimitapproval.component';

describe('FastagcreditlimitapprovalComponent', () => {
  let component: FastagcreditlimitapprovalComponent;
  let fixture: ComponentFixture<FastagcreditlimitapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastagcreditlimitapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastagcreditlimitapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
