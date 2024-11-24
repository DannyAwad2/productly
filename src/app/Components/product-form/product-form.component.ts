import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [ProductsService],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {
    this.productForm = fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      details: ['', Validators.required],
      image: ['http://placehold.it/300x300/999/CCC', Validators.required],
    });
  }

  productForm;
  status: 'create' | 'update' = 'create';

  handleSubmit() {
    const value = this.productForm.value;
    const product: IProduct = {
      id: 0,
      name: value.name || '',
      category: value.category || '',
      detail: value.details || '',
      image: value.image || '',
      price: value.price || 0,
    };
    this.productsService.create(product).subscribe((res) => {
      console.log(res);
      alert(`Product ${product.name} created succeccfuly.`);
    });
  }

  getFeild(name: string) {
    return this.productForm.get(name);
  }
}
