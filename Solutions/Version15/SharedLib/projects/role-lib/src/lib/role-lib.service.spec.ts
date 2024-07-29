import { TestBed } from '@angular/core/testing';

import { RoleLibService } from './role-lib.service';

describe('RoleLibService', () => {
  let service: RoleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
