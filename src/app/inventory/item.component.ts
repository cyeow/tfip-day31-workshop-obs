import { Component, Input, inject } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class InventoryItemComponent {
  @Input()
  item!: string;

  cartSvc = inject(CartService);
   
  addItemToCart(): void {
    this.cartSvc.addToCart$.next(this.item);
  }
}
