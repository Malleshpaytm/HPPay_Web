import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcityComponent } from './addeditcity.component';

describe('AddeditcityComponent', () => {
  let component: AddeditcityComponent;
  let fixture: ComponentFixture<AddeditcityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
