import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditofficerComponent } from './addeditofficer.component';

describe('AddeditofficerComponent', () => {
  let component: AddeditofficerComponent;
  let fixture: ComponentFixture<AddeditofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
