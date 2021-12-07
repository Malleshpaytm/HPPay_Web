import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebankenrollmentComponent } from './managebankenrollment.component';

describe('ManagebankenrollmentComponent', () => {
  let component: ManagebankenrollmentComponent;
  let fixture: ComponentFixture<ManagebankenrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebankenrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebankenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
