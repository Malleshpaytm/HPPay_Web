import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationmenuComponent } from './configurationmenu.component';

describe('ConfigurationmenuComponent', () => {
  let component: ConfigurationmenuComponent;
  let fixture: ComponentFixture<ConfigurationmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
