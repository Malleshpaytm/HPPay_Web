import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantcredentailrequestComponent } from './merchantcredentailrequest.component';

describe('MerchantcredentailrequestComponent', () => {
  let component: MerchantcredentailrequestComponent;
  let fixture: ComponentFixture<MerchantcredentailrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantcredentailrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantcredentailrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
