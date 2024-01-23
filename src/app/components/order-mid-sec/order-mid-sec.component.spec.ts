import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMidSecComponent } from './order-mid-sec.component';

describe('OrderMidSecComponent', () => {
  let component: OrderMidSecComponent;
  let fixture: ComponentFixture<OrderMidSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderMidSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderMidSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
