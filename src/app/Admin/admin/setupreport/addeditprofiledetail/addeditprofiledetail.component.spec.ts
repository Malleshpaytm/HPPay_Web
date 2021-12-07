import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditprofiledetailComponent } from './addeditprofiledetail.component';

describe('AddeditprofiledetailComponent', () => {
  let component: AddeditprofiledetailComponent;
  let fixture: ComponentFixture<AddeditprofiledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditprofiledetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditprofiledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
