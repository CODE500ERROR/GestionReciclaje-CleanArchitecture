import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { PrivacyPolicy } from '../models/privacy-policy';
import { PrivacyPolicyService } from '../services/privacy-policy.service';

@Injectable()
export class DetailPrivacyPolicyResolver implements Resolve<PrivacyPolicy> {

    constructor( private aboutService: PrivacyPolicyService,
                 private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<PrivacyPolicy> {

        return this.aboutService.getPrivacyPolicy().pipe(
            catchError(error => {
                this.toastr.error(error);
                return of(null);
            })
        );
    }
}
