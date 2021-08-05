import { TestBed } from '@angular/core/testing';

import { DespatcherService } from './despatcher.service';

describe('DespatcherService', () => {
  let service: DespatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
