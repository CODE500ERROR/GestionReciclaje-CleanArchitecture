import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { RoleService } from '../services/role.service';

@Injectable()
export class DetailRoleResolver implements Resolve<any> {

    constructor(private _roleService: RoleService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
 
        return this._roleService.getRoleById(route.params.id).pipe(
            catchError(error => {
                return of(null);
            })
        );
    }
}
