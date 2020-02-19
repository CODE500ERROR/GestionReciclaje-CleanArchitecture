import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { BreachService } from '../services/breach.service';

@Injectable()
export class DetailBreachResolver implements Resolve<any> {

    constructor(private _breachService: BreachService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
 
        return this._breachService.getBreachById(route.params.id).pipe(
            catchError(error => {
                return of(null);
            })
        );
    }
}
