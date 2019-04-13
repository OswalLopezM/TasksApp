import { TestBed } from '@angular/core/testing';

import { ConexionfirebaseService } from './conexionfirebase.service';

describe('ConexionfirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConexionfirebaseService = TestBed.get(ConexionfirebaseService);
    expect(service).toBeTruthy();
  });
});
