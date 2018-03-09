import { TestBed, inject } from '@angular/core/testing';

import { WeathService } from './weath.service';

describe('WeathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeathService]
    });
  });

  it('should be created', inject([WeathService], (service: WeathService) => {
    expect(service).toBeTruthy();
  }));
});
