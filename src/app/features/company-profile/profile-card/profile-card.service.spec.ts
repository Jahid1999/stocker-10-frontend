import { TestBed } from '@angular/core/testing';

import { ProfileCardService } from './profile-card.service';

describe('ProfileCardService', () => {
  let service: ProfileCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
