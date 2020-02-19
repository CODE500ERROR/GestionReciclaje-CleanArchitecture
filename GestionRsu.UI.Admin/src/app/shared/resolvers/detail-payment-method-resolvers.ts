import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { PaymentMethod } from '../models/payment-method';
import { PaymentMethodService } from '../services/payment-method.service';

@Injectable()
export class DetailPaymentMethodResolver implements Resolve<PaymentMethod> {
    constructor( private _paymentMethodService: PaymentMethodService,
                 private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<PaymentMethod> {

        return this._paymentMethodService.getPaymentMethod().pipe(
            catchError(error => {
                this.toastr.error(error);
                return of(null);
            })
        );
    }
}
