import { Component, OnInit } from '@angular/core';

// services
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html',
  styleUrls: ['./lista-venda.component.scss'],
  providers: [
    VendaService
  ]
})
export class ListaVendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
