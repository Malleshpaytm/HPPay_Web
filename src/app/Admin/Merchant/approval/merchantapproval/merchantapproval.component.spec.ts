import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantapprovalComponent } from './merchantapproval.component';

describe('MerchantapprovalComponent', () => {
  let component: MerchantapprovalComponent;
  let fixture: ComponentFixture<MerchantapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
