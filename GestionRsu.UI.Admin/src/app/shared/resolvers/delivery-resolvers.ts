import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Delivery } from '../models/delivery';
import { DeliveryService } from '../services/delivery.service';

@Injectable()
export class DetailDeliveryResolver implements Resolve<Delivery> {

    constructor( private aboutService: DeliveryService,
                 private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Delivery> {

        return this.aboutService.getDelivery().pipe(
            catchError(error => {
                this.toastr.error(error);
                return of(null);
            })
        );
    }
}
