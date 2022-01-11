import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyConfigurationComponent } from './loyalty-configuration.component';

describe('LoyaltyConfigurationComponent', () => {
  let component: LoyaltyConfigurationComponent;
  let fixture: ComponentFixture<LoyaltyConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
