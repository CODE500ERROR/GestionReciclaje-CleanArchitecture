import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PaymentMethod } from '../models/payment-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  baseApiUrl = environment.apiUrl + 'PaymentMethodPublicWeb';
  constructor(private httpService: HttpClient) { }

  create(paymentMethod: PaymentMethod) {
    return this.httpService.post<PaymentMethod>(this.baseApiUrl , paymentMethod);
  }
 getPaymentMethod(): Observable<PaymentMethod> {
    return this.httpService.get<PaymentMethod>(this.baseApiUrl);
  }
}
