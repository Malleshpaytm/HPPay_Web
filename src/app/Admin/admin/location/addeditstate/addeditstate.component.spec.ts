import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditstateComponent } from './addeditstate.component';

describe('AddeditstateComponent', () => {
  let component: AddeditstateComponent;
  let fixture: ComponentFixture<AddeditstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
