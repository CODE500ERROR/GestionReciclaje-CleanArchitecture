import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

import { SubCategory } from '../models/subCategory';
import { SubCategoryService } from '../_services/subCategory.service';

@Injectable()
export class DetailSubCategoryResolver implements Resolve<SubCategory> {
    constructor(private plantService: SubCategoryService, private router: Router,
                private alertify: AlertifyService, private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<SubCategory> {
        return this.plantService.getById(route.params.id).pipe(
            catchError(error => {
                console.log(error);
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}