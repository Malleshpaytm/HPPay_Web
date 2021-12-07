import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerolelistComponent } from './managerolelist.component';

describe('ManagerolelistComponent', () => {
  let component: ManagerolelistComponent;
  let fixture: ComponentFixture<ManagerolelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerolelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerolelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
