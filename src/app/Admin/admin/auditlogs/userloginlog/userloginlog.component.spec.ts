import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginlogComponent } from './userloginlog.component';

describe('UserloginlogComponent', () => {
  let component: UserloginlogComponent;
  let fixture: ComponentFixture<UserloginlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloginlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
