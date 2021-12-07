import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonalofficedetailsComponent } from './zonalofficedetails.component';

describe('ZonalofficedetailsComponent', () => {
  let component: ZonalofficedetailsComponent;
  let fixture: ComponentFixture<ZonalofficedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonalofficedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonalofficedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
