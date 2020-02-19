import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PagedResult } from '../models/pagination';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RolFilters } from '../models/rol-filters';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseApiUrl = environment.apiUrl + 'Role/';
  constructor(private http: HttpClient) {}


  getAll(filters: RolFilters): Observable<PagedResult<any[]>> {
    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append('pageNumber', filters.pageNumber != null ? filters.pageNumber .toString() :  '1' );

    params = params.append('pageSize',  filters.pageSize != null ? filters.pageSize .toString() :  null);
    params = params.append('name', filters.name);

    return this.http.get(this.baseApiUrl , { observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.entity = response.body['roles'];
        paginatedResult.filters.totalRecords = response.body['totalRecords'];
        return paginatedResult;
      }));
  }

  create(role: Role): Observable<Role>  {
    return this.http.post<Role>(this.baseApiUrl , role);
  }

  getRoleById(roleId: number): Observable<Role> {
    return this.http.get<Role>(this.baseApiUrl + 'GetById/'  +  roleId);
  }

  getAllRoles(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'GetAllRoles/');
  }

  edit(role: Role) {
    return this.http.put<Role>(this.baseApiUrl, role);
  }

  delete(roleId: number){
    return this.http.delete<Role>(this.baseApiUrl +roleId);
  }
}
