import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any[] = []; //replace with your custom data
  filterText: string='';
  filteredCustomers: any[] = [];//new line

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchCustomers();
    this.filteredCustomers = this.customers;
  }

  fetchCustomers() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      this.customers = data.customers;
    });
  }

  viewOrders(customerId: number) {
    this.router.navigate(['/orders', customerId]);
  }


applyFilter(): void {
  this.filteredCustomers = this.customers.filter((customer : any) => {
    const fullName = (customer.firstName + ' ' + customer.lastName).toLowerCase();
    return this.filterText && fullName.includes(this.filterText.toLowerCase());
  });
}
}