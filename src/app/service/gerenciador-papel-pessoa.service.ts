import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { PapelPessoaModel } from "../model/papel-pessoa-model";

@Injectable({
  providedIn: 'root'
})
export class GerenciadorPapelPessoaService {

  private URL_API = environment.URL_API.concat("gerenciador-papel-pessoa");

  constructor(
    private httpClient: HttpClient
  ) { }

  public findAll() : Observable<PapelPessoaModel[]> {
    return this.httpClient.get<PapelPessoaModel[]>(`${this.URL_API}`);
  }

  public findOne(papelPessoaID: number) : Observable<any> {
    return this.httpClient.get<any>(`${this.URL_API}/${papelPessoaID}`);
  }

}
