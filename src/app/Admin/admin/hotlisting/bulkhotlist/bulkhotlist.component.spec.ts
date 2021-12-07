import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkhotlistComponent } from './bulkhotlist.component';

describe('BulkhotlistComponent', () => {
  let component: BulkhotlistComponent;
  let fixture: ComponentFixture<BulkhotlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkhotlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkhotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
