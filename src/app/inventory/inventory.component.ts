import { Component, OnInit, inject } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  svc = inject(InventoryService);
  
  inventory: string[] = [];

  ngOnInit(): void {
    this.inventory = this.svc.getInventory();
  }
}
