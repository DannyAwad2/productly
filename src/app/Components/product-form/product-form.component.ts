import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  constructor(private fb: FormBuilder) {
    this.productForm = fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
      features: [''],
      description: ['', Validators.required],
    });
  }

  productForm;
  status: 'create' | 'update' = 'create';

  handleSubmit() {
    console.log(this.productForm.value);
  }

  getFeild(name: string) {
    return this.productForm.get(name);
  }
}
