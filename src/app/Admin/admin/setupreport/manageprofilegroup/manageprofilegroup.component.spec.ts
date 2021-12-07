import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageprofilegroupComponent } from './manageprofilegroup.component';

describe('ManageprofilegroupComponent', () => {
  let component: ManageprofilegroupComponent;
  let fixture: ComponentFixture<ManageprofilegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageprofilegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageprofilegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
