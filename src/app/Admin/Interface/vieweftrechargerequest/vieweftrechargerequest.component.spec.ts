import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweftrechargerequestComponent } from './vieweftrechargerequest.component';

describe('VieweftrechargerequestComponent', () => {
  let component: VieweftrechargerequestComponent;
  let fixture: ComponentFixture<VieweftrechargerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieweftrechargerequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweftrechargerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
