import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffermenulistComponent } from './offermenulist.component';

describe('OffermenulistComponent', () => {
  let component: OffermenulistComponent;
  let fixture: ComponentFixture<OffermenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffermenulistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffermenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
