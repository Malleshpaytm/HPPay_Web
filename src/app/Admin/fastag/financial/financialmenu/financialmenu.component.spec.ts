import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialmenuComponent } from './financialmenu.component';

describe('FinancialmenuComponent', () => {
  let component: FinancialmenuComponent;
  let fixture: ComponentFixture<FinancialmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
