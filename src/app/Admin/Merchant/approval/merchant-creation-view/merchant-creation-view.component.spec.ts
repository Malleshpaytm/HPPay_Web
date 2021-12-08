import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCreationViewComponent } from './merchant-creation-view.component';

describe('MerchantCreationViewComponent', () => {
  let component: MerchantCreationViewComponent;
  let fixture: ComponentFixture<MerchantCreationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantCreationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantCreationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
