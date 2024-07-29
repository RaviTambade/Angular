import { TestBed } from '@angular/core/testing';

import { ProducthubService } from './producthub.service';

describe('ProducthubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducthubService = TestBed.get(ProducthubService);
    expect(service).toBeTruthy();
  });
});
