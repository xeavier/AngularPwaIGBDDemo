import { TestBed } from '@angular/core/testing';

import { MapperHelperService } from './mapper-helper.service';

describe('MapperHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapperHelperService = TestBed.get(MapperHelperService);
    expect(service).toBeTruthy();
  });
});
