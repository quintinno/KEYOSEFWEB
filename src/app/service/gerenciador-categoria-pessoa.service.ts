import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { CategoriaPessoaModel } from "../model/categoria-pessoa-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorCategoriaPessoaService {

  private URL_API = environment.URL_API.concat("gerenciador-categoria-pessoa");

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll() : Observable<CategoriaPessoaModel[]> {
    return this.httpClient.get<CategoriaPessoaModel[]>(`${this.URL_API}`);
  }

  public findOne(categoriaPessoaID: number) : Observable<CategoriaPessoaModel> {
    return this.httpClient.get<CategoriaPessoaModel>(`${this.URL_API}/${categoriaPessoaID}`);
  }

}
