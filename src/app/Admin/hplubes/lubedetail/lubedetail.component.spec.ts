import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubedetailComponent } from './lubedetail.component';

describe('LubedetailComponent', () => {
  let component: LubedetailComponent;
  let fixture: ComponentFixture<LubedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LubedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LubedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
