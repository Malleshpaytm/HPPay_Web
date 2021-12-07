import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitydetailsComponent } from './citydetails.component';

describe('CitydetailsComponent', () => {
  let component: CitydetailsComponent;
  let fixture: ComponentFixture<CitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
