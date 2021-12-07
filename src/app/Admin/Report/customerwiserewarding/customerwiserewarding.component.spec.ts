import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwiserewardingComponent } from './customerwiserewarding.component';

describe('CustomerwiserewardingComponent', () => {
  let component: CustomerwiserewardingComponent;
  let fixture: ComponentFixture<CustomerwiserewardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerwiserewardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerwiserewardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
