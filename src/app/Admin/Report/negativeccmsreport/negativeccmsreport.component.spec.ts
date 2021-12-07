import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeccmsreportComponent } from './negativeccmsreport.component';

describe('NegativeccmsreportComponent', () => {
  let component: NegativeccmsreportComponent;
  let fixture: ComponentFixture<NegativeccmsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeccmsreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeccmsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
