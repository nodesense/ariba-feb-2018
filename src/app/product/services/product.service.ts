import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import {HttpClient}
     from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { Brand } from '../models/brand';

console.log(environment);

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
     // `${name}`  
     return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`)
  }

  getProduct(id: any): Observable<Product> {
    // `${name}`  
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`)
 }

 deleteProduct(id: any): Observable<any> {
  // `${name}`  
  return this.http.delete<any>(`${environment.apiEndPoint}/api/products/${id}`)
}


 saveProduct(product: Product): Observable<Product> {
  if (product.id) { // edit
    //PUT /api/products/1234
    // {{data in json}}

    // returns saved product data
    return this.http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`, 
                                  product);
 

  } else { // create
    // POST /api/products
    // {{data in json}}

    // returns saved product data, with id
    return this.http.post<Product>(`${environment.apiEndPoint}/api/products`, 
                                  product);
  }
 }


 getBrands(): Observable<Brand[]> {  
  return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
 }

}
