import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tire1reportComponent } from './tire1report.component';

describe('Tire1reportComponent', () => {
  let component: Tire1reportComponent;
  let fixture: ComponentFixture<Tire1reportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tire1reportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tire1reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
