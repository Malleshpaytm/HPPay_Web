import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedmerchanteditComponent } from './rejectedmerchantedit.component';

describe('RejectedmerchanteditComponent', () => {
  let component: RejectedmerchanteditComponent;
  let fixture: ComponentFixture<RejectedmerchanteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedmerchanteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedmerchanteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
