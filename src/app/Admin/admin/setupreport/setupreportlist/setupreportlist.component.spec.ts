import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupreportlistComponent } from './setupreportlist.component';

describe('SetupreportlistComponent', () => {
  let component: SetupreportlistComponent;
  let fixture: ComponentFixture<SetupreportlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupreportlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupreportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
