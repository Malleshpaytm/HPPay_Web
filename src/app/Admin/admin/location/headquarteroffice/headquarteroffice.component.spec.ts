import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadquarterofficeComponent } from './headquarteroffice.component';

describe('HeadquarterofficeComponent', () => {
  let component: HeadquarterofficeComponent;
  let fixture: ComponentFixture<HeadquarterofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadquarterofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadquarterofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
