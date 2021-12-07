import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovecustomerbonusComponent } from './approvecustomerbonus.component';

describe('ApprovecustomerbonusComponent', () => {
  let component: ApprovecustomerbonusComponent;
  let fixture: ComponentFixture<ApprovecustomerbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovecustomerbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovecustomerbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
