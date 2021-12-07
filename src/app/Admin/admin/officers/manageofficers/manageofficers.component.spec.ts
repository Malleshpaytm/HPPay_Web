import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageofficersComponent } from './manageofficers.component';

describe('ManageofficersComponent', () => {
  let component: ManageofficersComponent;
  let fixture: ComponentFixture<ManageofficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageofficersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
