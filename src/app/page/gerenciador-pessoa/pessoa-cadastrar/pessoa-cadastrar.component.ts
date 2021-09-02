import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PapelPessoaModel } from "src/app/model/papel-pessoa-model";
import { PessoaModel } from "../../../model/pessoa-model";
import { GerenciadorCategoriaPessoaService } from "../../../service/gerenciador-categoria-pessoa.service";
import { GerenciadorPapelPessoaService } from "../../../service/gerenciador-papel-pessoa.service";
import { GerenciadorPessoaService } from "../../../service/gerenciador-pessoa.service";

@Component({
  selector: "app-pessoa-cadastrar",
  templateUrl: "./pessoa-cadastrar.component.html",
  styleUrls: ["./pessoa-cadastrar.component.css"]
})
export class PessoaCadastrarComponent implements OnInit {

  public pessoaFormulario: FormGroup;

  public pessoaModel: PessoaModel;

  public categoriaPessoaList = new Array();
  public papelPessoaList: PapelPessoaModel[];

  public isApresentarMensagemSucesso: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private gerenciadorCategoriaPessoaService: GerenciadorCategoriaPessoaService,
    private gerenciadorPapelPessoaService: GerenciadorPapelPessoaService,
    private gerenciadorPessoaService: GerenciadorPessoaService
  ) { }

  ngOnInit(): void {
    this.initFormulario();
    this.recuperarCategoriaPessoaList();
    this.recuperarPapelPessoaList();
  }

  private initFormulario(): void {
    this.pessoaFormulario = this.formBuilder.group({
      nomeCompleto: ["", [Validators.required]],
      categoriaPessoaID: ["", [Validators.required]],
      isInstituicaoFinanceira: [false, [Validators.required]],
      localizacao: ["", [Validators.required]],
      papelPessoaID: ["", [Validators.required]],
      imagem: ["", []],
      isAtivo: [true, []]
    });
  }

  public recuperarCategoriaPessoaList() {
    this.gerenciadorCategoriaPessoaService.findAll().subscribe( response => {
      this.categoriaPessoaList = response;
    });
  }

  public recuperarPapelPessoaList() {
    this.gerenciadorPapelPessoaService.findAll().subscribe( respose => {
      this.papelPessoaList = respose;
    });
  }

  // TODO -- Refatorar passando apenas os ID como parametro transient ao endpoint
  public onCadastrarPessoa(): void {
    this.pessoaModel = this.pessoaFormulario.value;
      this.pessoaModel.papelPessoaID = this.pessoaFormulario.value.papelPessoaID;
      this.gerenciadorCategoriaPessoaService.findOne(this.pessoaFormulario.value.categoriaPessoaID).subscribe(response => {
        this.pessoaModel.nomeCompleto = this.pessoaFormulario.value.nomeCompleto;
        this.pessoaModel.localizacao = this.pessoaFormulario.value.localizacao;
        this.pessoaModel.imagem = this.pessoaFormulario.value.imagem;
        this.pessoaModel.isInstituicaoFinanceira = this.pessoaFormulario.value.isInstituicaoFinanceira;
        this.pessoaModel.isAtivo = true;
        this.pessoaModel.categoriaPessoa = response;
        this.gerenciadorPessoaService.save(this.pessoaModel).subscribe( respose => {
          this.limparDadosFormulario();
          this.apresentarMensagemSucesso();
        }, error => {
          console.error("ERROR: Erro ao tentar persistir os dados no Servidor!", "[", error, "]");
        });
      });
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
