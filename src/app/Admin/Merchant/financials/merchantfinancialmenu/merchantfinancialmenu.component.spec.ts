import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantfinancialmenuComponent } from './merchantfinancialmenu.component';

describe('MerchantfinancialmenuComponent', () => {
  let component: MerchantfinancialmenuComponent;
  let fixture: ComponentFixture<MerchantfinancialmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantfinancialmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantfinancialmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
