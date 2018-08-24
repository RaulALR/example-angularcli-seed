import { TestBed, inject } from '@angular/core/testing';

import { LobModalService } from './modal.service';

describe('LobModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LobModalService],
    });
  });

  it('should be created', inject([LobModalService], (service: LobModalService) => {
    expect(service).toBeTruthy();
  }));
});
