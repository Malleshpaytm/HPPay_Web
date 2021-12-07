import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNotificationComponent } from './subscribe-notification.component';

describe('SubscribeNotificationComponent', () => {
  let component: SubscribeNotificationComponent;
  let fixture: ComponentFixture<SubscribeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
