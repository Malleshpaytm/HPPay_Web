import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
    api_key=`1BA280E6-BAD6-4AD8-9C2B-6CD5777F517B`;
    authToken='Bearer '+ localStorage.getItem('token')
    constructor(readonly httpClient: HttpClient) {        
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': this.authToken,
            'API_Key':this.api_key
        }          
    }

    private get<T>(url: string, options: any): Observable<HttpEvent<T>> {
        return this.httpClient.get<T>(url, options);
    }

    private post<T>(url: string,payload: any, options: any): Observable<HttpEvent<T>> {
        const stringifiedPayload = JSON.stringify(payload); 
        return this.httpClient.post<any>(url, stringifiedPayload, options);
    }
}