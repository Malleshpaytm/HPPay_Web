import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultparameterComponent } from './resultparameter.component';

describe('ResultparameterComponent', () => {
  let component: ResultparameterComponent;
  let fixture: ComponentFixture<ResultparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultparameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
