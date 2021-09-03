import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { PessoaModel } from "../model/pessoa-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorPessoaService {

  private URL_API = environment.URL_API.concat("gerenciador-pessoa");

  constructor(
    private httpClient: HttpClient
  ) { }

  public save(pessoaModel: PessoaModel) : Observable<PessoaModel> {
    return this.httpClient.post<PessoaModel>(`${this.URL_API}`, pessoaModel);
  }

  public findAll() : Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.URL_API}`);
  }

  public delete(pessoaID: number) : Observable<Object> {
    return this.httpClient.delete(`${this.URL_API}/${pessoaID}`);
  }

}
