import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VewccmsrechargeComponent } from './vewccmsrecharge.component';

describe('VewccmsrechargeComponent', () => {
  let component: VewccmsrechargeComponent;
  let fixture: ComponentFixture<VewccmsrechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VewccmsrechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VewccmsrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
