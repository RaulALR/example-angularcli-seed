import { TestBed, inject } from '@angular/core/testing';

import { LobSharedLayerService } from './shared-layer.service';

describe('LobSharedLayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LobSharedLayerService]
    });
  });

  it('should be created', inject([LobSharedLayerService], (service: LobSharedLayerService) => {
    expect(service).toBeTruthy();
  }));
});
