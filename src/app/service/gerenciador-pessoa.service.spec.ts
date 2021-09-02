import { TestBed } from '@angular/core/testing';

import { GerenciadorPessoaService } from './gerenciador-pessoa.service';

describe('GerenciadorPessoaService', () => {
  let service: GerenciadorPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
