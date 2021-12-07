import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestccmsrechargereversalComponent } from './requestccmsrechargereversal.component';

describe('RequestccmsrechargereversalComponent', () => {
  let component: RequestccmsrechargereversalComponent;
  let fixture: ComponentFixture<RequestccmsrechargereversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestccmsrechargereversalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestccmsrechargereversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
