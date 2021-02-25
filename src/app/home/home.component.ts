import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Input() product: Product;
  @Output() productSelected = new EventEmitter<void>();
  constructor() { }
  onSelected() {
    this.productSelected.emit();
  }
  ngOnInit() {
  }

}
