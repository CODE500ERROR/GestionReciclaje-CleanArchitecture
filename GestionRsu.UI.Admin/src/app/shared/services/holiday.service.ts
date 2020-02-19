import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Holiday } from '../models/holiday';
import { Observable } from 'rxjs';
import { PagedResult } from '../models/pagination';
import { HolidayFilter } from '../models/holiday-filter';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  baseUrl = environment.apiUrl + 'holiday/';

  constructor(private http: HttpClient) {}

  getAll(fitlers: HolidayFilter): Observable<PagedResult<any[]>> {

    let params = new HttpParams();
    const paginatedResult: PagedResult<any[]> = new PagedResult<any[]>();
    params = params.append('pageNumber', fitlers.pageNumber != null ? fitlers.pageNumber .toString() :  null );

    params = params.append('pageSize',  fitlers.pageSize != null ? fitlers.pageSize .toString() :  null);
    params = params.append('name', fitlers.name);
    return this.http.get(this.baseUrl , { observe: 'response', params})
    .pipe(
      map(response => {
          paginatedResult.entity = response.body['holidays'];
          paginatedResult.filters.totalRecords = response.body['totalRecords'];
          return paginatedResult;
      }));
  }

  getHolidayById(id): Observable<Holiday> {
    return this.http.get<Holiday>(this.baseUrl + 'GetById/' + id);
  }

  getHolidayByMonth(month: number, year: number): Observable<Array<Holiday>> {
    return this.http.get<Array<Holiday>>(this.baseUrl + 'GetByMonth/' + month + '/' + year);
  }

  create(holiday: Holiday) {
    return this.http.post(this.baseUrl, holiday);
  }

  updateHoliday( holiday: Holiday) {
    return this.http.put(this.baseUrl, holiday);
  }

  deleteHoliday(holidayId: string) {
    return this.http.delete(this.baseUrl + holidayId);
  }

}
