import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[] = [
    new Product('i phone', 80000, 'some url', '15%' ),
    new Product('soundbar', 20000, 'some url', '25%' )
  ];
  constructor() { }

  ngOnInit() {
  }

  onProductSelected(product: Product) {
    this.productWasSelected.emit(product);
  }
}
