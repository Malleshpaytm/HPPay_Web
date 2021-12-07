import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedownloadComponent } from './advancedownload.component';

describe('AdvancedownloadComponent', () => {
  let component: AdvancedownloadComponent;
  let fixture: ComponentFixture<AdvancedownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
