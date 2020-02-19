import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';
;

@Injectable()
export class DetailProductResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private router: Router,
                private alertify: AlertifyService , private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.productService.getById(route.params.id).pipe(
            catchError(error => {
                console.log(error);
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}