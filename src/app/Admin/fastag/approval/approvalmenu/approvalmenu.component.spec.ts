import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalmenuComponent } from './approvalmenu.component';

describe('ApprovalmenuComponent', () => {
  let component: ApprovalmenuComponent;
  let fixture: ComponentFixture<ApprovalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
