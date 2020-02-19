import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.apiUrl + 'client/';

  constructor(private http: HttpClient) {}

 

  create(client) {
    return this.http.post(this.baseUrl, client);
  }


}
