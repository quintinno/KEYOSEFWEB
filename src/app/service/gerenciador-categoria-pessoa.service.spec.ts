import { TestBed } from '@angular/core/testing';

import { GerenciadorCategoriaPessoaService } from './gerenciador-categoria-pessoa.service';

describe('GerenciadorCategoriaPessoaService', () => {
  let service: GerenciadorCategoriaPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorCategoriaPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
