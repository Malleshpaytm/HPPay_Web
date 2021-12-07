import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantaccountstatementrequestComponent } from './merchantaccountstatementrequest.component';

describe('MerchantaccountstatementrequestComponent', () => {
  let component: MerchantaccountstatementrequestComponent;
  let fixture: ComponentFixture<MerchantaccountstatementrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantaccountstatementrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantaccountstatementrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
