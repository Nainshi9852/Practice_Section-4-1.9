import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  city: string = '';
  state: string = '';

  submitForm(): void {
    // Handle form submission logic (e.g., add or update customer)
  }

  cancel(): void {
    // Handle cancellation logic
  }
}