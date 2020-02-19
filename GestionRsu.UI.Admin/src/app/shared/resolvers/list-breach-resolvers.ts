import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Breach } from '../models/breach';
import { BreachService } from '../services/breach.service';
import { BreachFilter } from '../models/breach-filters';


@Injectable()
export class ListBreachResolver implements Resolve<Breach> {
    pagination = new BreachFilter();
    constructor(private breachService: BreachService, private router: Router,
                private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Breach> {

        return this.breachService.getAll(this.pagination).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                // this.router.navigate(['/starter']);
                return of(null);
            })
        );
    }
}
