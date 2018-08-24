import { TestBed, inject } from '@angular/core/testing';

import { LobHttpService } from './http.service';

describe('LobHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LobHttpService],
    });
  });

  it('should be created', inject([LobHttpService], (service: LobHttpService) => {
    expect(service).toBeTruthy();
  }));
});
