import { TestBed } from '@angular/core/testing';

import { SchedinfoService } from './schedinfo.service';

describe('SchedinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchedinfoService = TestBed.get(SchedinfoService);
    expect(service).toBeTruthy();
  });
});
