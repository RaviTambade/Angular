import { TestBed } from '@angular/core/testing';

import { MembershipLibService } from './membership-lib.service';

describe('MembershipLibService', () => {
  let service: MembershipLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
