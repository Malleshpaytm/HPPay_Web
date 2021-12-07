import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialemenuComponent } from './financialemenu.component';

describe('FinancialemenuComponent', () => {
  let component: FinancialemenuComponent;
  let fixture: ComponentFixture<FinancialemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
