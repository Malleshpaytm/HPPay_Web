import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantDetailsModalComponent } from './merchant-details-modal.component';

describe('MerchantDetailsModalComponent', () => {
  let component: MerchantDetailsModalComponent;
  let fixture: ComponentFixture<MerchantDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
