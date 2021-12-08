import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerDayearningDataComponent } from './mer-dayearning-data.component';

describe('MerDayearningDataComponent', () => {
  let component: MerDayearningDataComponent;
  let fixture: ComponentFixture<MerDayearningDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerDayearningDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerDayearningDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
