import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerQrTransactionsComponent } from './mer-qr-transactions.component';

describe('MerQrTransactionsComponent', () => {
  let component: MerQrTransactionsComponent;
  let fixture: ComponentFixture<MerQrTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerQrTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerQrTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
