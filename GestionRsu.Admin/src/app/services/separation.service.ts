import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Separation } from '../models/separation';
import { environment } from '../../environments/environment';
import { PagedResult } from '../views/shared/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class SeparationService {
  baseApiUrl = environment.apiUrl + 'separation/';

  constructor(private http: HttpClient) {}

  getAll(filters): Observable<PagedResult<any[]>> {
    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append(
      'pageNumber',
      filters.page != null ? filters.page.toString() : '1'
    );

    params = params.append(
      'pageSize',
      filters.pageSize != null ? filters.pageSize.toString() : null
    );

    if (filters.criteria) {
      params = params.append('description', filters.criteria);
    }

    return this.http.get(this.baseApiUrl, { observe: 'response', params }).pipe(
      map((response) => {
        paginatedResult.entity = response.body['separations'];
        return paginatedResult;
      })
    );
  }

  getById(id): Observable<Separation> {
    return this.http.get<Separation>(this.baseApiUrl + id);
  }

  update(plant: Separation) {
    return this.http.put(this.baseApiUrl, plant);
  }

  delete(id) {
    return this.http.delete(this.baseApiUrl + id);
  }

  create(separation: Separation) {
    return this.http.post(this.baseApiUrl, separation);
  }

  getSeparationByPlant() {
    return this.http.get<any[]>(this.baseApiUrl + 'GetSeparationByPlant');
  }
}
