import { Subject } from "rxjs";
import { CartItem } from "../models";

export class CartService {

    addToCart$ = new Subject<string>();
    removeFromCart$ = new Subject<CartItem>();
}