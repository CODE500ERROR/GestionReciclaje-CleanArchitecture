import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagedResult } from '../../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseApiUrl = environment.apiUrl + 'category/';

  constructor(private http: HttpClient) {}


  getAll(filters): Observable<PagedResult<any[]>> { 
    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append('pageNumber', filters.page != null ? filters.page .toString() :  null );
    params = params.append('pageSize',  filters.pageSize != null ? filters.pageSize .toString() :  null);
    
    if(filters.criteria) {
      params = params.append('name', filters.criteria);
    }

    return this.http.get(this.baseApiUrl , { observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.entity = response.body['categories'];
        paginatedResult.filters.totalItems = response.body['totalRecords'];
        return paginatedResult;
      }));
  }

  getById(id): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + id);
  }

  getAllParent(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'GetAllParent');
  }

  getByParent(parentId: string) : Observable<any> {
    return this.http.get<any>(this.baseApiUrl + 'GetCategoryByParent/' + parentId);
  }

  update(category: any) {
    return this.http.put(this.baseApiUrl, category);
  }

  delete(id) {
    return this.http.delete(this.baseApiUrl + id);
  }

  create(category: any) {
    return this.http.post(this.baseApiUrl, category);
  }
}
