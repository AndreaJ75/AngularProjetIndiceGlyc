import { TestBed } from '@angular/core/testing';

import { AlimentListService } from './aliment-list.service';

describe('AlimentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlimentListService = TestBed.get(AlimentListService);
    expect(service).toBeTruthy();
  });
});
