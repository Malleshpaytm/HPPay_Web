import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrUpdateCustomerDetailsComponent } from './view-or-update-customer-details.component';

describe('ViewOrUpdateCustomerDetailsComponent', () => {
  let component: ViewOrUpdateCustomerDetailsComponent;
  let fixture: ComponentFixture<ViewOrUpdateCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrUpdateCustomerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrUpdateCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
