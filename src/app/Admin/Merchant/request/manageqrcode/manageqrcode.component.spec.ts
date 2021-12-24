import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageqrcodeComponent } from './manageqrcode.component';

describe('ManageqrcodeComponent', () => {
  let component: ManageqrcodeComponent;
  let fixture: ComponentFixture<ManageqrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageqrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageqrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
