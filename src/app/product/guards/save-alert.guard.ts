import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductEditComponent } from '../components/product-edit/product-edit.component';

@Injectable()
export class SaveAlertGuard 
    implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
     component: ProductEditComponent   
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    if (component.form.pristine) {
      return true;
    }

    let result: boolean = window.confirm("Do you leave without saving changes?");
    return result;
  }
}
