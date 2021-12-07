import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehppaycustomerComponent } from './managehppaycustomer.component';

describe('ManagehppaycustomerComponent', () => {
  let component: ManagehppaycustomerComponent;
  let fixture: ComponentFixture<ManagehppaycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagehppaycustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehppaycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
