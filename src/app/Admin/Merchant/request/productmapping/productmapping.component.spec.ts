import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmappingComponent } from './productmapping.component';

describe('ProductmappingComponent', () => {
  let component: ProductmappingComponent;
  let fixture: ComponentFixture<ProductmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
