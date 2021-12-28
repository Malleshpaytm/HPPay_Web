import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFsmComponent } from './add-fsm.component';

describe('AddFsmComponent', () => {
  let component: AddFsmComponent;
  let fixture: ComponentFixture<AddFsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
