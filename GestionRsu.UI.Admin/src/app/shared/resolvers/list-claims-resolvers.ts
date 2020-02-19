import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { ClaimService } from '../services/claim.service';

@Injectable()
export class ClaimsListResolver implements Resolve<Product> {
    
    constructor( private _claimsService: ClaimService,
                 private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {

        return this._claimsService.getAllClaims().pipe(
            catchError(error => {
                this.toastr.error(error);
                return of(null);
            })
        );
    }
}
