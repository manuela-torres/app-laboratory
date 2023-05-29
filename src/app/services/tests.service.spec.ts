import { TestBed } from '@angular/core/testing';

import { TestsService } from './tests.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestsService', () => {
  let service: TestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
