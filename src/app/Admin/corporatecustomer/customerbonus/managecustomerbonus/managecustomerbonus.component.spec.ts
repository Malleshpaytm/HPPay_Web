import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecustomerbonusComponent } from './managecustomerbonus.component';

describe('ManagecustomerbonusComponent', () => {
  let component: ManagecustomerbonusComponent;
  let fixture: ComponentFixture<ManagecustomerbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecustomerbonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecustomerbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
