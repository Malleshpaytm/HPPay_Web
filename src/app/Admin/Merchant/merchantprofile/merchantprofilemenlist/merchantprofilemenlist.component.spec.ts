import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantprofilemenlistComponent } from './merchantprofilemenlist.component';

describe('MerchantprofilemenlistComponent', () => {
  let component: MerchantprofilemenlistComponent;
  let fixture: ComponentFixture<MerchantprofilemenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantprofilemenlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantprofilemenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
