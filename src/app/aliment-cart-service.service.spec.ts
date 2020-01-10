import { TestBed } from '@angular/core/testing';

import { AlimentCartServiceService } from './aliment-cart-service.service';

describe('AlimentCartServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlimentCartServiceService = TestBed.get(AlimentCartServiceService);
    expect(service).toBeTruthy();
  });
});
