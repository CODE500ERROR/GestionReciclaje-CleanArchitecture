import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ConditionsTermsService } from '../services/conditions-terms.service';
import { ConditionsTerms } from '../models/conditions-terms';

@Injectable()
export class DetailConditionsTermsResolver implements Resolve<ConditionsTerms> {

    constructor( private aboutService: ConditionsTermsService,
                 private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ConditionsTerms> {

        return this.aboutService.getConditionsTerms().pipe(
            catchError(error => {
                this.toastr.error(error);
                return of(null);
            })
        );
    }
}
