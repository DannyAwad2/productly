import { Component } from '@angular/core';
import { ManageProductsComponent } from './Components/manage-products/manage-products.component';

@Component({
  selector: 'app-root',
  imports: [ManageProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
