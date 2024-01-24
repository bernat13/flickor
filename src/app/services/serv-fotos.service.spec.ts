import { TestBed } from '@angular/core/testing';

import { ServFotosService } from './serv-fotos.service';

describe('ServFotosService', () => {
  let service: ServFotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServFotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
