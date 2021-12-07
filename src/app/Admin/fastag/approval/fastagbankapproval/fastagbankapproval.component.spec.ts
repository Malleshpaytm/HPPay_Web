import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastagbankapprovalComponent } from './fastagbankapproval.component';

describe('FastagbankapprovalComponent', () => {
  let component: FastagbankapprovalComponent;
  let fixture: ComponentFixture<FastagbankapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastagbankapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastagbankapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
