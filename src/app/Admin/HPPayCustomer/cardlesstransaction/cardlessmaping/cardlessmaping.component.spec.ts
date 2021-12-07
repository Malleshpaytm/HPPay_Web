import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlessmapingComponent } from './cardlessmaping.component';

describe('CardlessmapingComponent', () => {
  let component: CardlessmapingComponent;
  let fixture: ComponentFixture<CardlessmapingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlessmapingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlessmapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
