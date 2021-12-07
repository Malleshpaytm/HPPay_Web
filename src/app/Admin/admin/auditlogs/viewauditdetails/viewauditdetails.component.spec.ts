import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewauditdetailsComponent } from './viewauditdetails.component';

describe('ViewauditdetailsComponent', () => {
  let component: ViewauditdetailsComponent;
  let fixture: ComponentFixture<ViewauditdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewauditdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewauditdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
