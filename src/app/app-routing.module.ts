import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorMonitoramentoComponent } from './page/gerenciador-monitoramento/gerenciador-monitoramento.component';
import { GerenciadorPessoaComponent } from './page/gerenciador-pessoa/gerenciador-pessoa.component';
import { PessoaCadastrarComponent } from './page/gerenciador-pessoa/pessoa-cadastrar/pessoa-cadastrar.component';

const routes: Routes = [
  { path: "gerenciador-monitoramento", component: GerenciadorMonitoramentoComponent },
  { path: "gerenciador-pessoa", component: GerenciadorPessoaComponent },
  { path: "pessoa-cadastrar", component: PessoaCadastrarComponent },
  { path: "", redirectTo: "gerenciador-monitoramento", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
