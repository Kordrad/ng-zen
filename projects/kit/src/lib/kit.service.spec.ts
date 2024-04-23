import { TestBed } from '@angular/core/testing';

import { KitService } from './kit.service';

describe('KitService', () => {
  let service: KitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
