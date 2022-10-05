import { TestBed } from '@angular/core/testing';

import { MarketSummaryService } from './market-summary.service';

describe('MarketSummaryService', () => {
  let service: MarketSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
