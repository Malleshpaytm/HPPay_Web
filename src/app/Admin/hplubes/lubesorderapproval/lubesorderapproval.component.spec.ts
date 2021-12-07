import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubesorderapprovalComponent } from './lubesorderapproval.component';

describe('LubesorderapprovalComponent', () => {
  let component: LubesorderapprovalComponent;
  let fixture: ComponentFixture<LubesorderapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LubesorderapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LubesorderapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
