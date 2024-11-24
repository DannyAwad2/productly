import { Component } from '@angular/core';
import { ProductFormComponent } from './../product-form/product-form.component';
import { ProductsListComponent } from './../products-list/products-list.component';

@Component({
  selector: 'app-manage-products',
  imports: [ProductFormComponent, ProductsListComponent],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss',
})
export class ManageProductsComponent {}
