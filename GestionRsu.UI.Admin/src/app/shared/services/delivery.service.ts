import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { Delivery } from '../models/delivery';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseApiUrl = environment.apiUrl + 'DeliveryPublicWeb';
  constructor(private httpService: HttpClient) { } 
  create(aboutUs: Delivery) {
    return this.httpService.post<Delivery>(this.baseApiUrl , aboutUs);
  }

  getDelivery(): Observable<Delivery> {
    return this.httpService.get<Delivery>(this.baseApiUrl);
  }
}
