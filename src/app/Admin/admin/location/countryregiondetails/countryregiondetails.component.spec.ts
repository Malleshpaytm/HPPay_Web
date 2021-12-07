import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryregiondetailsComponent } from './countryregiondetails.component';

describe('CountryregiondetailsComponent', () => {
  let component: CountryregiondetailsComponent;
  let fixture: ComponentFixture<CountryregiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryregiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryregiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
