import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerreferalrequestComponent } from './customerreferalrequest.component';

describe('CustomerreferalrequestComponent', () => {
  let component: CustomerreferalrequestComponent;
  let fixture: ComponentFixture<CustomerreferalrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerreferalrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerreferalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
