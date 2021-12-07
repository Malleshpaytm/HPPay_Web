import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcreditlimitstatusComponent } from './bankcreditlimitstatus.component';

describe('BankcreditlimitstatusComponent', () => {
  let component: BankcreditlimitstatusComponent;
  let fixture: ComponentFixture<BankcreditlimitstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankcreditlimitstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankcreditlimitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
