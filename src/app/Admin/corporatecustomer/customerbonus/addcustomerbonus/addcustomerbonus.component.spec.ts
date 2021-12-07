import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerbonusComponent } from './addcustomerbonus.component';

describe('AddcustomerbonusComponent', () => {
  let component: AddcustomerbonusComponent;
  let fixture: ComponentFixture<AddcustomerbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomerbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
