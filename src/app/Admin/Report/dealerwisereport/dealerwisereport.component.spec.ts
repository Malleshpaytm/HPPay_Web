import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerwisereportComponent } from './dealerwisereport.component';

describe('DealerwisereportComponent', () => {
  let component: DealerwisereportComponent;
  let fixture: ComponentFixture<DealerwisereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerwisereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
