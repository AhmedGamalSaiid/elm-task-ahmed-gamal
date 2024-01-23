import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor() { }
  getOrdersData() {
    return [
        {
            id: '1234567890',
            code: '2021/3/31',
            name: 'شركة نبراس المنار للاتصالات وتقنية المعلومات',
            description: ' خدمات التتبع',
            proccess: 'إصدار',
            learner: 'محمد عبدالله صالح علي',
            stat: {
                val: 'مرفوض',
                status: 0,
            },
        },
        {
            id: '1234567890',
            code: '2021/3/31',
            name: 'شركة تواصل الرياض',
            description: 'تصريح تقديم خدمات الاتصالات عبر الشبكات الارضية (NTN)',
            proccess: 'تحديث',
            learner: 'ماجد السعيد',
            stat: {
                val: 'مكتمل',
                status: 1,
            },
        },
        {
            id: '1234567890',
            code: '2021/3/31',
            name: 'شركة نبراس المنار للاتصالات وتقنية المعلومات',
            description: ' خدمات التتبع',
            proccess: 'إصدار',
            learner: 'محمد عبدالله صالح علي',
            stat: {
                val: 'بانتظار سداد المقابل المالي',
                status: 2,
            },
        },
    ];
}
getOrdersMini() {
  return Promise.resolve(this.getOrdersData().slice(0, 5));
}

}
