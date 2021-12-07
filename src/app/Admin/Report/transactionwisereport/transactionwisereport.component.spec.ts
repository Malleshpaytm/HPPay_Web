import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionwisereportComponent } from './transactionwisereport.component';

describe('TransactionwisereportComponent', () => {
  let component: TransactionwisereportComponent;
  let fixture: ComponentFixture<TransactionwisereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionwisereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
