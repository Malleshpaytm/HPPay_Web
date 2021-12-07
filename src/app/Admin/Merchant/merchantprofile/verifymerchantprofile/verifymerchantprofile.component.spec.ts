import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifymerchantprofileComponent } from './verifymerchantprofile.component';

describe('VerifymerchantprofileComponent', () => {
  let component: VerifymerchantprofileComponent;
  let fixture: ComponentFixture<VerifymerchantprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifymerchantprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifymerchantprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
