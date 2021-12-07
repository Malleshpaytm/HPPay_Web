import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebanklimitComponent } from './managebanklimit.component';

describe('ManagebanklimitComponent', () => {
  let component: ManagebanklimitComponent;
  let fixture: ComponentFixture<ManagebanklimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebanklimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebanklimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
