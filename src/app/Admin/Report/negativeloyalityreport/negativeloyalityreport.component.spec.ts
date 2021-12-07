import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeloyalityreportComponent } from './negativeloyalityreport.component';

describe('NegativeloyalityreportComponent', () => {
  let component: NegativeloyalityreportComponent;
  let fixture: ComponentFixture<NegativeloyalityreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeloyalityreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeloyalityreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
