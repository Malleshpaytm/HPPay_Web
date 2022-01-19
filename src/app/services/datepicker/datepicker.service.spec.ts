import { TestBed } from '@angular/core/testing';

import { CustomAdapter } from './datepicker.service';

describe('DatepickerService', () => {
  let service: CustomAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
