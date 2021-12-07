import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BireportComponent } from './bireport.component';

describe('BireportComponent', () => {
  let component: BireportComponent;
  let fixture: ComponentFixture<BireportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BireportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BireportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
