import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: CustomerHeaderComponent;
  let fixture: ComponentFixture<CustomerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
