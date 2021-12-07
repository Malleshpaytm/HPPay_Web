import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HplubesmenuComponent } from './hplubesmenu.component';

describe('HplubesmenuComponent', () => {
  let component: HplubesmenuComponent;
  let fixture: ComponentFixture<HplubesmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HplubesmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HplubesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
