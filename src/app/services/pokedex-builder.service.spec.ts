import { TestBed } from '@angular/core/testing';

import { PokedexBuilderService } from './pokedex-builder.service';

describe('PokedexBuilderService', () => {
  let service: PokedexBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
