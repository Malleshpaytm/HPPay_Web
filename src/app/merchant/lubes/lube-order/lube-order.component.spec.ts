import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubeOrderComponent } from './lube-order.component';

describe('LubeOrderComponent', () => {
  let component: LubeOrderComponent;
  let fixture: ComponentFixture<LubeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LubeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LubeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
