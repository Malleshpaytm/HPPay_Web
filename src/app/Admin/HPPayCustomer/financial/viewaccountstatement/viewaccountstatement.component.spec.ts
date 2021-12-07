import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccountstatementComponent } from './viewaccountstatement.component';

describe('ViewaccountstatementComponent', () => {
  let component: ViewaccountstatementComponent;
  let fixture: ComponentFixture<ViewaccountstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaccountstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccountstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
