import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerTransactionDetailsComponent } from './mer-transaction-details.component';

describe('MerTransactionDetailsComponent', () => {
  let component: MerTransactionDetailsComponent;
  let fixture: ComponentFixture<MerTransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerTransactionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
