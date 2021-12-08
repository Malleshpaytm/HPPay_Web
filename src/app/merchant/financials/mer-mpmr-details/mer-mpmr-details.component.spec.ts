import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerMpmrDetailsComponent } from './mer-mpmr-details.component';

describe('MerMpmrDetailsComponent', () => {
  let component: MerMpmrDetailsComponent;
  let fixture: ComponentFixture<MerMpmrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerMpmrDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerMpmrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
