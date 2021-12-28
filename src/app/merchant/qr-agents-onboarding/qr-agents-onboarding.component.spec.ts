import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrAgentsOnboardingComponent } from './qr-agents-onboarding.component';

describe('QrAgentsOnboardingComponent', () => {
  let component: QrAgentsOnboardingComponent;
  let fixture: ComponentFixture<QrAgentsOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrAgentsOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrAgentsOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
