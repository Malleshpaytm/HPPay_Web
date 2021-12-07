import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardlessDashboadComponent } from './manage-cardless-dashboad.component';

describe('ManageCardlessDashboadComponent', () => {
  let component: ManageCardlessDashboadComponent;
  let fixture: ComponentFixture<ManageCardlessDashboadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCardlessDashboadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardlessDashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
