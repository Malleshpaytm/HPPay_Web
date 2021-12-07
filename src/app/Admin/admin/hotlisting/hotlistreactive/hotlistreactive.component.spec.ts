import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistreactiveComponent } from './hotlistreactive.component';

describe('HotlistreactiveComponent', () => {
  let component: HotlistreactiveComponent;
  let fixture: ComponentFixture<HotlistreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlistreactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlistreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
