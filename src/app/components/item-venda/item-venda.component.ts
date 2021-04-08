import { Component, Input, OnInit } from '@angular/core';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-item-venda',
  templateUrl: './item-venda.component.html',
  styleUrls: ['./item-venda.component.scss']
})
export class ItemVendaComponent implements OnInit {

  @Input() public titulo: string | null;

  constructor(
    private service: VendaService
  ) {
    this.titulo = null;
  }

  ngOnInit(): void {
  }

}
