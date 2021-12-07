import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementreportComponent } from './settlementreport.component';

describe('SettlementreportComponent', () => {
  let component: SettlementreportComponent;
  let fixture: ComponentFixture<SettlementreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
