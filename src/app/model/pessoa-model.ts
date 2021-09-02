import { CategoriaPessoaModel } from "./categoria-pessoa-model";
import { PapelPessoaModel } from "./papel-pessoa-model";

export interface PessoaModel {
    codigo: number;
    nomeCompleto: string;
    categoriaPessoa: CategoriaPessoaModel;
    papelPessoaID: number;
    localizacao: string;
    imagem: string;
    isInstituicaoFinanceira: boolean;
    isAtivo: boolean;
}
