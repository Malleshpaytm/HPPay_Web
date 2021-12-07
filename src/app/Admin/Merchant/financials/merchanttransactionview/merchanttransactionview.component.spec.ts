import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchanttransactionviewComponent } from './merchanttransactionview.component';

describe('MerchanttransactionviewComponent', () => {
  let component: MerchanttransactionviewComponent;
  let fixture: ComponentFixture<MerchanttransactionviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchanttransactionviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchanttransactionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
