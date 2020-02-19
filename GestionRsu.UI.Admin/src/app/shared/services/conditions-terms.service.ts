import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConditionsTerms } from '../models/conditions-terms';




@Injectable({
  providedIn: 'root'
})
export class ConditionsTermsService {
  baseApiUrl = environment.apiUrl + 'conditionTerms';
  constructor(private httpService: HttpClient) { }

  create(conditionsTerms: ConditionsTerms): Observable<ConditionsTerms>  {
    return this.httpService.post<ConditionsTerms>(this.baseApiUrl , conditionsTerms);
  }

  getConditionsTerms(): Observable<ConditionsTerms> {
    return this.httpService.get<ConditionsTerms>(this.baseApiUrl);
  }
}
