import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [{ label: 'الرئيسية' }, { label: 'الطلبات' }];
}
}
