import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestccmdrechargethrougheftComponent } from './requestccmdrechargethrougheft.component';

describe('RequestccmdrechargethrougheftComponent', () => {
  let component: RequestccmdrechargethrougheftComponent;
  let fixture: ComponentFixture<RequestccmdrechargethrougheftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestccmdrechargethrougheftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestccmdrechargethrougheftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
