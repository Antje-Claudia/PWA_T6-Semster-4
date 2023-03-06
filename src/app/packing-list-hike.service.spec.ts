import { TestBed } from '@angular/core/testing';

import { PackingListHikeService } from './packing-list-hike.service';

describe('PackingListHikeService', () => {
  let service: PackingListHikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackingListHikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
