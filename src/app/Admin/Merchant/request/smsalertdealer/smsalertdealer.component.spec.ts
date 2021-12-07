import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsalertdealerComponent } from './smsalertdealer.component';

describe('SmsalertdealerComponent', () => {
  let component: SmsalertdealerComponent;
  let fixture: ComponentFixture<SmsalertdealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsalertdealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsalertdealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
