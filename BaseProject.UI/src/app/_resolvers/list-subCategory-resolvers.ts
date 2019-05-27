import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SubCategoryFilter } from '../models/subCategoryFilter';
import { SubCategoryService } from '../_services/subCategory.service';
import { SubCategory } from '../models/subCategory';

@Injectable()
export class ListSubCategoryResolver implements Resolve<SubCategory> {
    pagination = new SubCategoryFilter();
    constructor(private categoryService: SubCategoryService, private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<SubCategory> {
        this.pagination.pageNumber = 1;
        this.pagination.pageSize = 5;
        return this.categoryService.getAll(this.pagination).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}