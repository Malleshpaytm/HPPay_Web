import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcountryregionComponent } from './addeditcountryregion.component';

describe('AddeditcountryregionComponent', () => {
  let component: AddeditcountryregionComponent;
  let fixture: ComponentFixture<AddeditcountryregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcountryregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcountryregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
