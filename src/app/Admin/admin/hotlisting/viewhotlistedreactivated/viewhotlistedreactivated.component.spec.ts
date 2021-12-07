import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhotlistedreactivatedComponent } from './viewhotlistedreactivated.component';

describe('ViewhotlistedreactivatedComponent', () => {
  let component: ViewhotlistedreactivatedComponent;
  let fixture: ComponentFixture<ViewhotlistedreactivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhotlistedreactivatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhotlistedreactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
