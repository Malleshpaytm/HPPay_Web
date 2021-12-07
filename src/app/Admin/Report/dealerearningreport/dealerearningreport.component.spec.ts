import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerearningreportComponent } from './dealerearningreport.component';

describe('DealerearningreportComponent', () => {
  let component: DealerearningreportComponent;
  let fixture: ComponentFixture<DealerearningreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerearningreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerearningreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
