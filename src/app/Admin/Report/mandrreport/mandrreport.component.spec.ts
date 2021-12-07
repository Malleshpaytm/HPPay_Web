import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandrreportComponent } from './mandrreport.component';

describe('MandrreportComponent', () => {
  let component: MandrreportComponent;
  let fixture: ComponentFixture<MandrreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandrreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandrreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
