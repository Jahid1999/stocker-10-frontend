import { TestBed } from '@angular/core/testing';

import { StochasticOscillatorService } from './stochastic-oscillator.service';

describe('StochasticOscillatorService', () => {
  let service: StochasticOscillatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StochasticOscillatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
