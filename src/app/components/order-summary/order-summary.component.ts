import { Component } from '@angular/core';
import { Order } from '../../Interfaces/order';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})

export class OrderSummaryComponent {
  orders: Order[] = [
    {
      name: 'اجمالي الطلبات',
      quantity: '1,652',
      icon: 'assets/images/Path3767.png',
    },
    {
      name: 'طلب جديد',
      quantity: '32',
      icon: 'assets/images/Path3766.png',
    },
    {
      name: 'بانتظار الاعتماد والتوجيه',
      quantity: '43',
      icon: 'assets/images/Path3765.png'
    }, {
      name: 'طلب تحت الاجراء',
      quantity: '233',
      icon: 'assets/images/Pat764.png',
    }
  ];

}
