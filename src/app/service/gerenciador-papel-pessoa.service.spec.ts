import { TestBed } from '@angular/core/testing';

import { GerenciadorPapelPessoaService } from './gerenciador-papel-pessoa.service';

describe('GerenciadorPapelPessoaService', () => {
  let service: GerenciadorPapelPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciadorPapelPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
