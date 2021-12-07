import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantaccountstatementdownloadComponent } from './merchantaccountstatementdownload.component';

describe('MerchantaccountstatementdownloadComponent', () => {
  let component: MerchantaccountstatementdownloadComponent;
  let fixture: ComponentFixture<MerchantaccountstatementdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantaccountstatementdownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantaccountstatementdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
