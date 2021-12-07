import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemailComponent } from './managemail.component';

describe('ManagemailComponent', () => {
  let component: ManagemailComponent;
  let fixture: ComponentFixture<ManagemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
