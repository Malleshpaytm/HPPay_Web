import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablepayabledetailComponent } from './receivablepayabledetail.component';

describe('ReceivablepayabledetailComponent', () => {
  let component: ReceivablepayabledetailComponent;
  let fixture: ComponentFixture<ReceivablepayabledetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivablepayabledetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablepayabledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
