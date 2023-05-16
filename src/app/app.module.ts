import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory/item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/item.component';
import { InventoryService } from './inventory/inventory.service';
import { CartService } from './cart/cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryItemComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [InventoryService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
