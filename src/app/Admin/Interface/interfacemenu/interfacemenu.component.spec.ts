import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacemenuComponent } from './interfacemenu.component';

describe('InterfacemenuComponent', () => {
  let component: InterfacemenuComponent;
  let fixture: ComponentFixture<InterfacemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfacemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
