import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerEarningBreakupComponent } from './mer-earning-breakup.component';

describe('MerEarningBreakupComponent', () => {
  let component: MerEarningBreakupComponent;
  let fixture: ComponentFixture<MerEarningBreakupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerEarningBreakupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerEarningBreakupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
