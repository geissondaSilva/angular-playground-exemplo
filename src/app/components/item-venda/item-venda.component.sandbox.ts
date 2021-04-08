import { sandboxOf } from 'angular-playground';
import { VendaService } from 'src/app/services/venda.service';

// aplicacao
import { ItemVendaComponent } from './item-venda.component';


export default sandboxOf(ItemVendaComponent)
  .add('default', {
    template: `<app-item-venda titulo="Macarrão instantâneo"></app-item-venda>`
  }
).add('Varios itens', {
  template: `
    <app-item-venda titulo="Macarrão instantâneo"></app-item-venda>
    <app-item-venda titulo="Feijão"></app-item-venda>
    <app-item-venda titulo="Arroz"></app-item-venda>
  `,
  providers: [
    VendaService
  ]
});
