import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';
import { CartItem } from '../models';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements AfterViewInit, OnDestroy {
  cart: CartItem[] = [];

  svc = inject(CartService);
  
  addToCart$!: Subscription;
  removeFromCart$!: Subscription;

  ngAfterViewInit(): void {
    this.addToCart$ = this.svc.addToCart$.subscribe(
      item => this.addToCart(item)
    )

    this.removeFromCart$ = this.svc.removeFromCart$.subscribe(
      item => this.removeFromCart(item)
    )
  }

  ngOnDestroy(): void {
      this.addToCart$.unsubscribe();
      this.removeFromCart$.unsubscribe();
  }

  addToCart(item: string): void {
    let idx = this.cart.findIndex(i => i.name === item);

    if(idx == -1) {
      this.cart.push({ name: item, quantity: 1 } as CartItem);
    } else {
      this.cart[idx].quantity += 1;
    }
  }

  removeFromCart(item: CartItem): void {
    this.cart.splice(this.cart.findIndex(i => i === item), 1);
  }
}
