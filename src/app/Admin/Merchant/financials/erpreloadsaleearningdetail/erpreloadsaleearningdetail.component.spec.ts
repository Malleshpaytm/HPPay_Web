import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpreloadsaleearningdetailComponent } from './erpreloadsaleearningdetail.component';

describe('ErpreloadsaleearningdetailComponent', () => {
  let component: ErpreloadsaleearningdetailComponent;
  let fixture: ComponentFixture<ErpreloadsaleearningdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpreloadsaleearningdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpreloadsaleearningdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
