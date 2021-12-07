import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditregionalofficeComponent } from './addeditregionaloffice.component';

describe('AddeditregionalofficeComponent', () => {
  let component: AddeditregionalofficeComponent;
  let fixture: ComponentFixture<AddeditregionalofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditregionalofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditregionalofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
