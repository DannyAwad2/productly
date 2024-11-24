import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products-list',
  imports: [],
  providers: [ProductsService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe((data) => console.log(data));
  }
}
