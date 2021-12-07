import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatemenuofaccountComponent } from './statemenuofaccount.component';

describe('StatemenuofaccountComponent', () => {
  let component: StatemenuofaccountComponent;
  let fixture: ComponentFixture<StatemenuofaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatemenuofaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatemenuofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
