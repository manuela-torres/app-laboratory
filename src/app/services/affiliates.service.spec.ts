import { TestBed } from '@angular/core/testing';

import { AffiliatesService } from './affiliates.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AffiliatesService', () => {
  let service: AffiliatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AffiliatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
