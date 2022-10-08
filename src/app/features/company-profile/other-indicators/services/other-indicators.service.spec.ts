import { TestBed } from '@angular/core/testing';

import { OtherIndicatorsService } from './other-indicators.service';

describe('OtherIndicatorsService', () => {
  let service: OtherIndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherIndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
