/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MacdService } from './macd.service';

describe('Service: Macd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MacdService]
    });
  });

  it('should ...', inject([MacdService], (service: MacdService) => {
    expect(service).toBeTruthy();
  }));
});
