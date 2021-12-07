import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchparamrterComponent } from './searchparamrter.component';

describe('SearchparamrterComponent', () => {
  let component: SearchparamrterComponent;
  let fixture: ComponentFixture<SearchparamrterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchparamrterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchparamrterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
