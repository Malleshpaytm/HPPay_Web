import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerdetailComponent } from './officerdetail.component';

describe('OfficerdetailComponent', () => {
  let component: OfficerdetailComponent;
  let fixture: ComponentFixture<OfficerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
