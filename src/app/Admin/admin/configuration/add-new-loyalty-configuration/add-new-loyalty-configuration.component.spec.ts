import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLoyaltyConfigurationComponent } from './add-new-loyalty-configuration.component';

describe('AddNewLoyaltyConfigurationComponent', () => {
  let component: AddNewLoyaltyConfigurationComponent;
  let fixture: ComponentFixture<AddNewLoyaltyConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewLoyaltyConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLoyaltyConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
