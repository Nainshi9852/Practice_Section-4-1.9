import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerId!: number;
  customerOrders!: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchCustomerOrders();
  }
/*fetchCustomerOrders() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      const customer = data.customers.find((cust: any) => cust.id === this.customerId);
      this.customerOrders = customer ? customer.orders : [];
    });
  }*/

  fetchCustomerOrders() {
    console.log('Customer ID:', this.customerId);
  
    this.http.get<any>('assets/data.json').subscribe(data => {
      const customer = data.customers.find((cust: any) => cust.id === this.customerId);
      console.log('Customer:', customer);
      this.customerOrders = customer ? customer.orders : [];
      console.log('Customer Orders:', this.customerOrders);
    });
  }

}
