import { TestBed, inject } from '@angular/core/testing';

import { LobShareConstantsService } from './share-constants.service';

describe('LobShareConstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LobShareConstantsService]
    });
  });

  it('should be created', inject([LobShareConstantsService], (service: LobShareConstantsService) => {
    expect(service).toBeTruthy();
  }));
});
