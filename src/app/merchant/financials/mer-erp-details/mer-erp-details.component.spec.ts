import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerErpDetailsComponent } from './mer-erp-details.component';

describe('MerErpDetailsComponent', () => {
  let component: MerErpDetailsComponent;
  let fixture: ComponentFixture<MerErpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerErpDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerErpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
