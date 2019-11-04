import { TestBed } from '@angular/core/testing';

import { EntityGuardService } from './entity-guard.service';

describe('EntityGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityGuardService = TestBed.get(EntityGuardService);
    expect(service).toBeTruthy();
  });
});
