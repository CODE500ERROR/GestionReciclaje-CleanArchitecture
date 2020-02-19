import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { RoleService } from '../services/role.service';
import { RolFilters } from '../models/rol-filters';

@Injectable()
export class RolesListResolver implements Resolve<Product> {
    filter = new RolFilters();
    constructor( private _rolesService: RoleService,
                 private toastr: ToastrService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {

        return this._rolesService.getAll(this.filter).pipe(
            catchError(error => {
                this.toastr.error(error);
                return of(null);
            })
        );
    }
}
