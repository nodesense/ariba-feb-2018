import { Component, OnInit, ViewChild } from '@angular/core';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import { Brand } from '../../models/brand';

import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); 

  brands$: Observable<Brand[]>;

  @ViewChild("productForm")
  form: NgForm;

  @ViewChild("productName")
  productNameModel : NgModel;


  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
      // ActivatedRoute, read url params
      const id = this.route.snapshot.params['id'];
      console.log("ID is ", id);

      if (id) { // edit 
        this.productService.getProduct(id)
        .subscribe ( product => {
          this.product = product;
        });
      }


      this.brands$ = this.productService.getBrands();
  }

  gotoList() {
    this.router.navigateByUrl("/products/list");
  }

  saveProduct() {
    console.log(this.product);

    if (this.form.pristine) {
      alert('No changes found');
      return;
    }

    if (this.form.invalid) {
      alert('invalid data');
      return;
    }

    this.productService
    .saveProduct(this.product)
    .subscribe (savedProduct => {
      console.log("Saved ", savedProduct.id);

      // option 1: continue working with form
      this.product = savedProduct;
      this.form.reset(savedProduct);

      // option 2: redirect to other comp
      //this.router.navigateByUrl('/products/list');

      

    });
  }

}
