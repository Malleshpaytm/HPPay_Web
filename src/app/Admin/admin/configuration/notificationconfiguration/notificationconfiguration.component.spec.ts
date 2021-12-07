import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationconfigurationComponent } from './notificationconfiguration.component';

describe('NotificationconfigurationComponent', () => {
  let component: NotificationconfigurationComponent;
  let fixture: ComponentFixture<NotificationconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationconfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
