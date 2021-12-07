import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatedetailComponent } from './statedetail.component';

describe('StatedetailComponent', () => {
  let component: StatedetailComponent;
  let fixture: ComponentFixture<StatedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
