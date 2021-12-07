import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedmerchantComponent } from './rejectedmerchant.component';

describe('RejectedmerchantComponent', () => {
  let component: RejectedmerchantComponent;
  let fixture: ComponentFixture<RejectedmerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedmerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
