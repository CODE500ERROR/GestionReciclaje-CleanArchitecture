import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SubCategory } from '../models/subCategory';
import { SubCategoryFilter } from '../models/subCategoryFilter';
import { PagedResult } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  baseApiUrl = environment.apiUrl + 'subCategory/';

  constructor(private http: HttpClient) {}


  getAll(filters: SubCategoryFilter): Observable<PagedResult<any[]>> {
    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append('pageNumber', filters.pageNumber != null ? filters.pageNumber .toString() :  null );

    params = params.append('pageSize',  filters.pageSize != null ? filters.pageSize .toString() :  null);
    params = params.append('name', filters.name);

    return this.http.get(this.baseApiUrl , { observe: 'response', params})
    .pipe(
      map(response => {
          paginatedResult.filters.pageSize = response.body['pageSize'];
          paginatedResult.filters.pageNumber = response.body['pageNumber'];
          paginatedResult.filters.totalRecords = response.body['totalRecords'];
          paginatedResult.entity = response.body['subCategories'];
          return paginatedResult;
      }));
  }

  getById(id): Observable<SubCategory> {
    return this.http.get<SubCategory>(this.baseApiUrl + id);
  }

  update(subCategory: SubCategory) {
    return this.http.put(this.baseApiUrl, subCategory);
  }

  delete(id) {
    return this.http.delete(this.baseApiUrl + id);
  }

  create(subCategory: SubCategory) {
    return this.http.post(this.baseApiUrl + 'create', subCategory);
  }
}
