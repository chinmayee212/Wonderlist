import { TestBed } from '@angular/core/testing';

import { GettaskserviceService } from './gettaskservice.service';

describe('GettaskserviceService', () => {
  let service: GettaskserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettaskserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
