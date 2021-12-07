import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoffersComponent } from './createoffers.component';

describe('CreateoffersComponent', () => {
  let component: CreateoffersComponent;
  let fixture: ComponentFixture<CreateoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateoffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
