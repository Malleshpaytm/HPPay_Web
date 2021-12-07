import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmsmenuComponent } from './ccmsmenu.component';

describe('CcmsmenuComponent', () => {
  let component: CcmsmenuComponent;
  let fixture: ComponentFixture<CcmsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcmsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcmsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
