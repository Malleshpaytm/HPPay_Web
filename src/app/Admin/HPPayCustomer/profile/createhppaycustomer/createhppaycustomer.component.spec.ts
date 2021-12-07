import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehppaycustomerComponent } from './createhppaycustomer.component';

describe('CreatehppaycustomerComponent', () => {
  let component: CreatehppaycustomerComponent;
  let fixture: ComponentFixture<CreatehppaycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatehppaycustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehppaycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
