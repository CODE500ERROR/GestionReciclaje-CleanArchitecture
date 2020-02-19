import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PrivacyPolicy } from '../models/privacy-policy';



@Injectable({
  providedIn: 'root'
})
export class PrivacyPolicyService {
  baseApiUrl = environment.apiUrl + 'PrivacyPolicy';
  constructor(private httpService: HttpClient) { }

  create(privacyPolicy: PrivacyPolicy) {
    return this.httpService.post<PrivacyPolicy>(this.baseApiUrl , privacyPolicy);
  }

  getPrivacyPolicy(): Observable<PrivacyPolicy> {
    return this.httpService.get<PrivacyPolicy>(this.baseApiUrl);
  }
}
