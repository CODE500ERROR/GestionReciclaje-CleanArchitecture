import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  baseApiUrl = environment.apiUrl + 'Claim/';
  constructor(private httpService: HttpClient) { }

  getAllClaims(): Observable<any> {
    return this.httpService.get<any>(this.baseApiUrl);
  }
}
