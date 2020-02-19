import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PagedResult } from '../models/pagination';
import { BreachFilter } from '../models/breach-filters';
import { Breach } from '../models/breach';



@Injectable({
  providedIn: 'root'
})
export class BreachService {
  baseUrl = environment.apiUrl + 'breach/';

  constructor(private http: HttpClient) {}

  getAll(fitlers: BreachFilter): Observable<PagedResult<any[]>> {

    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append('pageNumber', fitlers.pageNumber != null ? fitlers.pageNumber .toString() :  null );

    params = params.append('pageSize',  fitlers.pageSize != null ? fitlers.pageSize .toString() :  null);
    params = params.append('email', fitlers.name);
    return this.http.get(this.baseUrl , { observe: 'response', params})
    .pipe(
      map(response => {
          paginatedResult.entity = response.body['breachs'];
          paginatedResult.filters.totalRecords = response.body['totalRecords'];
          return paginatedResult;
      }));
  }

  getBreachById(id): Observable<Breach> {
    return this.http.get<Breach>(this.baseUrl + id);
  }

  create(breach: Breach){
    return this.http.post(this.baseUrl, breach);
  }

  updateBreach( breach: Breach) {
    return this.http.put(this.baseUrl, breach);
  }

  deleteBreach(breachId: string) {
    return this.http.delete(this.baseUrl + breachId);
  }

}
