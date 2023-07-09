import { TestBed } from '@angular/core/testing';

import { CatwikiService } from './catwiki.service';

describe('CatwikiService', () => {
  let service: CatwikiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatwikiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
