import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadaccountstatementComponent } from './downloadaccountstatement.component';

describe('DownloadaccountstatementComponent', () => {
  let component: DownloadaccountstatementComponent;
  let fixture: ComponentFixture<DownloadaccountstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadaccountstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadaccountstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
