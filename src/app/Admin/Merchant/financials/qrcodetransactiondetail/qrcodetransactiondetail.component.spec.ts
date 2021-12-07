import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodetransactiondetailComponent } from './qrcodetransactiondetail.component';

describe('QrcodetransactiondetailComponent', () => {
  let component: QrcodetransactiondetailComponent;
  let fixture: ComponentFixture<QrcodetransactiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodetransactiondetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodetransactiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
