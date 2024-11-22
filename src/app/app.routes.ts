import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ManageProductsComponent } from './Components/manage-products/manage-products.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ManageProductsComponent,
  },
];
