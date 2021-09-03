import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { GerenciadorPessoaService } from 'src/app/service/gerenciador-pessoa.service';

@Component({
  selector: 'app-gerenciador-pessoa',
  templateUrl: './gerenciador-pessoa.component.html',
  styleUrls: ['./gerenciador-pessoa.component.css']
})
export class GerenciadorPessoaComponent implements OnInit {

  public pessoaList: PessoaModel[] = new Array();

  constructor(
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onFindAll();
  }

  public onFindAll() {
    this.gerenciadorPessoaService.findAll().subscribe( response => {
      this.pessoaList = response;
    });
  }

  public onDelete(pessoaID: number) {
    this.gerenciadorPessoaService.delete(pessoaID).subscribe( response => {
      setTimeout(() => {
        window.alert("Pessoa excluída com Sucesso!");
        window.location.reload();
      }, 100);
    });
  }

  public redirecionarPaginaEditarPessoa(pessoaID: number) {
    this.router.navigate([`pessoa-editar`, pessoaID]);
  }

}
