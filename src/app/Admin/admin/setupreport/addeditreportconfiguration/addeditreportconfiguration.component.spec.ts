import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditreportconfigurationComponent } from './addeditreportconfiguration.component';

describe('AddeditreportconfigurationComponent', () => {
  let component: AddeditreportconfigurationComponent;
  let fixture: ComponentFixture<AddeditreportconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditreportconfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditreportconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
