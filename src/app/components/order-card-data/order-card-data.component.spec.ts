import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardDataComponent } from './order-card-data.component';

describe('OrderCardDataComponent', () => {
  let component: OrderCardDataComponent;
  let fixture: ComponentFixture<OrderCardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCardDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
