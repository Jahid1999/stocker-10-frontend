import { TestBed } from '@angular/core/testing';

import { SharePatternService } from './share-pattern.service';

describe('SharePatternService', () => {
  let service: SharePatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
