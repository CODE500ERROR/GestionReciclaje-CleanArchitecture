import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PagedResult } from '../../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  baseApiUrl = environment.apiUrl + 'plant/';

  constructor(private http: HttpClient) {}


  getAll(filters): Observable<PagedResult<any[]>> {
    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append('pageNumber', filters.page != null ? filters.page .toString() :  '1' );
    params = params.append('pageSize',  filters.pageSize != null ? filters.pageSize .toString() :  null);
    if(filters.criteria) {
      params = params.append('name', filters.criteria);
    }
  

    return this.http.get(this.baseApiUrl , { observe: 'response', params})
    .pipe(
      map(response => {
        paginatedResult.entity = response.body['plants'];
        paginatedResult.filters.totalItems = response.body['totalRecords'];
        return paginatedResult;
      }));
  }

  getPlantById(id): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + id);
  }

  updatePlant(plant) {
    return this.http.put(this.baseApiUrl, plant);
  }

  deletePlant(id) {
    return this.http.delete(this.baseApiUrl + id);
  }

  create(plant) {
    return this.http.post(this.baseApiUrl, plant);
  }
}
