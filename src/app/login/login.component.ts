/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
*/

import { Component } from '@angular/core';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  submitForm(loginForm: NgForm): void {
    if (loginForm.valid) {
      // Handle form submission logic
      console.log('Form submitted');
    }
  }
}