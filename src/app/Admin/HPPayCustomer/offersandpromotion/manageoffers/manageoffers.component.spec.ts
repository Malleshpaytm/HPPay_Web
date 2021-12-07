import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageoffersComponent } from './manageoffers.component';

describe('ManageoffersComponent', () => {
  let component: ManageoffersComponent;
  let fixture: ComponentFixture<ManageoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
