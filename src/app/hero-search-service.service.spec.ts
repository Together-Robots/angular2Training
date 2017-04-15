import { TestBed, inject } from '@angular/core/testing';

import { HeroSearchServiceService } from './hero-search-service.service';

describe('HeroSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSearchServiceService]
    });
  });

  it('should ...', inject([HeroSearchServiceService], (service: HeroSearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
