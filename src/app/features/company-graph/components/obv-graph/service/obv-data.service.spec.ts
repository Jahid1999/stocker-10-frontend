import { TestBed } from '@angular/core/testing';

import { ObvDataService } from './obv-data.service';

describe('ObvDataService', () => {
  let service: ObvDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObvDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
