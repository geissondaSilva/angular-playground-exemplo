import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemVendaComponent } from './components/item-venda/item-venda.component';
import { ListaVendaComponent } from './components/lista-venda/lista-venda.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemVendaComponent,
    ListaVendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
