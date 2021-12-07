import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantdaywiseearningviewComponent } from './merchantdaywiseearningview.component';

describe('MerchantdaywiseearningviewComponent', () => {
  let component: MerchantdaywiseearningviewComponent;
  let fixture: ComponentFixture<MerchantdaywiseearningviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantdaywiseearningviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantdaywiseearningviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
