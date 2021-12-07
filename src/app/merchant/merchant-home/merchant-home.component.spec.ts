import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechantHomeComponent } from './merchant-home.component';

describe('MerchantHomeComponent', () => {
  let component: MechantHomeComponent;
  let fixture: ComponentFixture<MechantHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechantHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechantHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
