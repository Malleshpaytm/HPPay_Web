import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditserviceComponent } from './addeditservice.component';

describe('AddeditserviceComponent', () => {
  let component: AddeditserviceComponent;
  let fixture: ComponentFixture<AddeditserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
