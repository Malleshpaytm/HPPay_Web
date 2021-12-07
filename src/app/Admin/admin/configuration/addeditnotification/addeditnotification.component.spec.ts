import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditnotificationComponent } from './addeditnotification.component';

describe('AddeditnotificationComponent', () => {
  let component: AddeditnotificationComponent;
  let fixture: ComponentFixture<AddeditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditnotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
