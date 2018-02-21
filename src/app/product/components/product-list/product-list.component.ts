import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

// FIXME: async, trackBy not working

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription: ISubscription;
  
  // alternative 
  products$: Observable<Product[]>;

  constructor(private productService:ProductService) { 
     console.log("Product List comp created");
  }

  ngOnInit() {
    this.subscription = this.productService
          .getProducts()
          .subscribe ( products => {
            console.log("Got products");
            this.products = products;
          });

    // alternative
    //this.products$ = this.productService.getProducts();
  }

  // called by angular, trackBy
  trackByProductId(index: number, product: Product) {
    //console.log("track by called ", product.id, index); 
    return product.id;
  }

  fetchProducts() {
    this.subscription = this.productService
          .getProducts()
          .subscribe ( products => {
            console.log("Got products");
            this.products = products;
          });

    //this.products$ = this.productService.getProducts();
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id)
    .subscribe ( () => {
        this.fetchProducts();
    });
  }

  ngOnDestroy() {
     // this.subscription.unsubscribe();
  }

}
