import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastagProfileMenuComponent } from './fastag-profile-menu.component';

describe('FastagProfileMenuComponent', () => {
  let component: FastagProfileMenuComponent;
  let fixture: ComponentFixture<FastagProfileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastagProfileMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastagProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
