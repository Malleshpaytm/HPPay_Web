import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalofficedetailComponent } from './regionalofficedetail.component';

describe('RegionalofficedetailComponent', () => {
  let component: RegionalofficedetailComponent;
  let fixture: ComponentFixture<RegionalofficedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalofficedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalofficedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
