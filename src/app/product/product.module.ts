import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';


import {Routes, RouterModule} from '@angular/router';


import {FormsModule, 
       ReactiveFormsModule} from '@angular/forms';
import { ProductService } from './services/product.service';
import { CanEditGuard } from './guards/can-edit.guard';
import { SaveAlertGuard } from './guards/save-alert.guard';


const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,

    children: [
      {
        path: 'list', // parent path, /products/list
        component: ProductListComponent
      },

      {
        path: 'search',  
        component: ProductSearchComponent
      },

      {
        path: 'create',  
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },

      {
        path: 'edit/:id',   //products/edit/12345  
        component: ProductEditComponent,
        canActivate: [CanEditGuard],
        canDeactivate: [SaveAlertGuard]
      },
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [ProductHomeComponent, 
                ProductListComponent, 
                  ProductEditComponent, 
                  ProductSearchComponent],

  providers: [
    ProductService,
    CanEditGuard,
    SaveAlertGuard
  ]
})
export class ProductModule { }
