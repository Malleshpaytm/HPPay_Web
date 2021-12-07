import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrewardingdataComponent } from './customerrewardingdata.component';

describe('CustomerrewardingdataComponent', () => {
  let component: CustomerrewardingdataComponent;
  let fixture: ComponentFixture<CustomerrewardingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrewardingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrewardingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
