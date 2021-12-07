import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizecustomerbonusComponent } from './authorizecustomerbonus.component';

describe('AuthorizecustomerbonusComponent', () => {
  let component: AuthorizecustomerbonusComponent;
  let fixture: ComponentFixture<AuthorizecustomerbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizecustomerbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizecustomerbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
