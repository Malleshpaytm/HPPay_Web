import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifycustomerComponent } from './verifycustomer.component';

describe('VerifycustomerComponent', () => {
  let component: VerifycustomerComponent;
  let fixture: ComponentFixture<VerifycustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifycustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
