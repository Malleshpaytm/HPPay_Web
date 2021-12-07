import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditzonalofficeComponent } from './addeditzonaloffice.component';

describe('AddeditzonalofficeComponent', () => {
  let component: AddeditzonalofficeComponent;
  let fixture: ComponentFixture<AddeditzonalofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditzonalofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditzonalofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
