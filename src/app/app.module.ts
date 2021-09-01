import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { GerenciadorMonitoramentoComponent } from './page/gerenciador-monitoramento/gerenciador-monitoramento.component';
import { GerenciadorPessoaComponent } from './page/gerenciador-pessoa/gerenciador-pessoa.component';
import { PessoaCadastrarComponent } from './page/gerenciador-pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GerenciadorMonitoramentoComponent,
    GerenciadorPessoaComponent,
    PessoaCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
