import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwiseredemptionComponent } from './customerwiseredemption.component';

describe('CustomerwiseredemptionComponent', () => {
  let component: CustomerwiseredemptionComponent;
  let fixture: ComponentFixture<CustomerwiseredemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwiseredemptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerwiseredemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
