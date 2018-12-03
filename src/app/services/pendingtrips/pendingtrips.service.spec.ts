import { TestBed } from '@angular/core/testing';

import { PendingtripsService } from './pendingtrips.service';

describe('PendingtripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingtripsService = TestBed.get(PendingtripsService);
    expect(service).toBeTruthy();
  });
});
