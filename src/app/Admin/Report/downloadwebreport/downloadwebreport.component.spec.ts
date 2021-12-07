import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadwebreportComponent } from './downloadwebreport.component';

describe('DownloadwebreportComponent', () => {
  let component: DownloadwebreportComponent;
  let fixture: ComponentFixture<DownloadwebreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadwebreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadwebreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
