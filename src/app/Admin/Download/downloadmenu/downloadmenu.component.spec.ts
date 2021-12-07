import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadmenuComponent } from './downloadmenu.component';

describe('DownloadmenuComponent', () => {
  let component: DownloadmenuComponent;
  let fixture: ComponentFixture<DownloadmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
