import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { Holiday } from '../models/holiday';
import { HolidayService } from '../services/holiday.service';
import { HolidayFilter } from '../models/holiday-filter';


@Injectable()
export class ListHolidayResolver implements Resolve<Holiday> {
    pagination = new HolidayFilter();
    constructor(private holidayService: HolidayService, private router: Router,
                private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Holiday> {

        return this.holidayService.getAll(this.pagination).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                // this.router.navigate(['/starter']);
                return of(null);
            })
        );
    }
}
