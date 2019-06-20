import { Component, OnInit } from '@angular/core';
import { products } from '../products'; //import the list

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = products; //convert the list to local variable that can be used in the html (there is a loop there)

  constructor() { }

  ngOnInit() { }

  share() {
    window.alert('The product has been shared!');
  }

  //when the (click)notify is called then run this function.
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
