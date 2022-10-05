import { TestBed } from '@angular/core/testing';

import { HealthSliderService } from './health-slider.service';

describe('HealthSliderService', () => {
  let service: HealthSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
