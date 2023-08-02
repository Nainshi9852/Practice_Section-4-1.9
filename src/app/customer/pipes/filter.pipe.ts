import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(customers: any[], searchText: string): any[] {
    if (!customers || !searchText) {
      return customers;
    }
    
    searchText = searchText.toLowerCase();
    
    return customers.filter(customer => {
      const fullName = customer.firstName + ' ' + customer.lastName;
      return fullName.toLowerCase().includes(searchText);
    });
  }
}