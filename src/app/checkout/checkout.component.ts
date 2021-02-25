import { Component, OnInit } from '@angular/core';
import {CheckoutForm} from '../model/checkoutForm';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productsAvailable = ['Iphone', 'Samsung Soundbar',
    'HP Laptop', 'Sony Headphones'];

  checkoutForm = new CheckoutForm('', this.productsAvailable[0] , 0, new Date() );

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.checkoutForm); }

  constructor() { }

  blankForm() {
    this.checkoutForm = new CheckoutForm('', '', 0, new Date());
  }
  ngOnInit() {
  }

}
