import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { FilterPipe } from './customer/pipes/filter.pipe';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'orders/:id', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  // Other routes
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerComponent,
    FilterPipe,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    CustomerManagementComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
