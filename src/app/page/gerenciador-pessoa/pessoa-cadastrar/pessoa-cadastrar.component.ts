import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PessoaModel } from "../../../model/pessoa-model";

@Component({
  selector: "app-pessoa-cadastrar",
  templateUrl: "./pessoa-cadastrar.component.html",
  styleUrls: ["./pessoa-cadastrar.component.css"]
})
export class PessoaCadastrarComponent implements OnInit {

  public pessoaFormulario: FormGroup;

  public pessoaModel: PessoaModel;

  public categoriaPessoaList = new Array();
  public papelPessoaList = new Array();

  public isApresentarMensagemSucesso: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.categoriaPessoaList = [
      { codigo: 1, descricao: "Pessoa Física", sigla: "PF" },
      { codigo: 2, descricao: "Pessoa Jurídica", sigla: "PJ" }
    ];
    this.papelPessoaList = [
      { codigo: 1, descricao: "Administrador Financeiro", sigla: "ADF" },
      { codigo: 2, descricao: "Favorecido", sigla: "FAV" },
      { codigo: 3, descricao: "Devedor de Empréstimos", sigla: "DEE" }
    ];
    this.initFormulario();
  }

  private initFormulario(): void {
    this.pessoaFormulario = this.formBuilder.group({
      nome: ["", [Validators.required]],
      categoria: ["", [Validators.required]],
      isInstituicaoFinanceira: [false, [Validators.required]],
      localizacao: ["", [Validators.required]],
      papel: ["", [Validators.required]],
      imagem: ["", []],
      isAtivo: [true, []]
    });
  }

  public onCadastrarPessoa(): void {
    console.log("Cadastrar Pessoa....", this.pessoaFormulario.value);
    this.limparDadosFormulario();
    this.apresentarMensagemSucesso();
  }

  private limparDadosFormulario() : void {
    this.pessoaFormulario.reset({
      "nome": "",
      "categoria": "",
      "isInstituicaoFinanceira": "",
      "localizacao": "",
      "papel": "",
      "imagem": "",
      "isAtivo": ""
     });
  }

  private apresentarMensagemSucesso() {
    this.isApresentarMensagemSucesso = true;
    setTimeout(() => {
      this.isApresentarMensagemSucesso = false;
    }, 4000);
  }

}
