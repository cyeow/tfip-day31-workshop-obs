import { Component, Input, Output, inject } from '@angular/core';
import { CartItem } from '../models';
import { Subject } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class CartItemComponent {
  @Input()
  item!: CartItem;

  svc = inject(CartService);

  incrementQty(): void {
    this.item.quantity++;
  }

  decrementQty(): void {
    if(this.item.quantity > 1) {
      this.item.quantity--;
    }
  }

  removeFromCart(): void {
    this.svc.removeFromCart$.next(this.item);
  }

  updateQty(qty: number) {
    this.item.quantity = qty;
  }
}
