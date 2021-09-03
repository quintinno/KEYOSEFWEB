import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorMonitoramentoComponent } from './page/gerenciador-monitoramento/gerenciador-monitoramento.component';
import { GerenciadorPessoaComponent } from './page/gerenciador-pessoa/gerenciador-pessoa.component';
import { PessoaCadastrarComponent } from './page/gerenciador-pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaEditarComponent } from './page/gerenciador-pessoa/pessoa-editar/pessoa-editar.component';

const routes: Routes = [
  { path: "gerenciador-monitoramento", component: GerenciadorMonitoramentoComponent },
  { path: "gerenciador-pessoa", component: GerenciadorPessoaComponent },
  { path: "pessoa-cadastrar", component: PessoaCadastrarComponent },
  { path: "pessoa-editar/:pessoaID", component: PessoaEditarComponent },
  { path: "", redirectTo: "gerenciador-monitoramento", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
