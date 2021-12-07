import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementdetailComponent } from './settlementdetail.component';

describe('SettlementdetailComponent', () => {
  let component: SettlementdetailComponent;
  let fixture: ComponentFixture<SettlementdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
