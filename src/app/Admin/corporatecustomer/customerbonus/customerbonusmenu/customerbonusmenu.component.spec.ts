import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbonusmenuComponent } from './customerbonusmenu.component';

describe('CustomerbonusmenuComponent', () => {
  let component: CustomerbonusmenuComponent;
  let fixture: ComponentFixture<CustomerbonusmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerbonusmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbonusmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
