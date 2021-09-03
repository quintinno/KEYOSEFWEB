import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa-model';
import { GerenciadorPessoaService } from 'src/app/service/gerenciador-pessoa.service';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent implements OnInit {

  public pessoaModel: PessoaModel;

  constructor(
    private gerenciadorPessoaService: GerenciadorPessoaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findOne();
  }

  public findOne() {
    this.gerenciadorPessoaService.findOne(this.recuperarCodigo()).subscribe( response => {
      this.pessoaModel = response;
      console.log(this.pessoaModel);
    });
  }

  private recuperarCodigo() : number {
    return this.activatedRoute.snapshot.params["pessoaID"];
  }

}
