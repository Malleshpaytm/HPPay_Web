import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceinfoComponent } from './balanceinfo.component';

describe('BalanceinfoComponent', () => {
  let component: BalanceinfoComponent;
  let fixture: ComponentFixture<BalanceinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
