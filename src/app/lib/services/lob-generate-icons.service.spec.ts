import { TestBed, inject } from '@angular/core/testing';

import { LobGenerateIconsService } from './generate-icons.service';

describe('LobGenerateIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LobGenerateIconsService]
    });
  });

  it('should be created', inject([LobGenerateIconsService], (service: LobGenerateIconsService) => {
    expect(service).toBeTruthy();
  }));
});
