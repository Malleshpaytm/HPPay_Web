import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerSettlementDetailsComponent } from './mer-settlement-details.component';

describe('McSettlementDetailsComponent', () => {
  let component: MerSettlementDetailsComponent;
  let fixture: ComponentFixture<MerSettlementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerSettlementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerSettlementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
