import { TestBed } from '@angular/core/testing';

import { SearchdataService } from './searchdata.service';

describe('SearchdataService', () => {
  let service: SearchdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
