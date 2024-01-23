import { Component } from '@angular/core';

import { OrderServiceService } from '../../services/order-service.service';
import { Order } from '../../Interfaces/orders';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  constructor(private orderService: OrderServiceService) { }

  orders!: Order[];
  ngOnInit() {


    this.orderService.getOrdersMini().then((data) => {
      this.orders = data;
    });
  }
}
