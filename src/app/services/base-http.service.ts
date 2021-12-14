import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GlobalConstants } from '../shared/helpers/global-constants';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  authToken = 'Bearer ' + localStorage.getItem('token');
  hpPayApiRoot = environment.hpPayApiRoot;
  constructor(readonly httpClient: HttpClient) {}

  public get<T>(
    url: string,
    options: { headers: HttpHeaders } = { headers: new HttpHeaders() }
  ): Observable<T> {
    options.headers = this.setHeaders(options.headers);
    return this.httpClient.get<T>(url, options);
  }

  public post<T>(
    url: string,
    payload: any,
    options: { headers: HttpHeaders } = { headers: new HttpHeaders() }
  ): Observable<T> {
    options.headers = this.setHeaders(options.headers);
    const stringifiedPayload = JSON.stringify(payload);
    return this.httpClient
      .post<T>(url, stringifiedPayload, options)
      .pipe(map((resp) => resp));
  }

  private setHeaders(headers: HttpHeaders): HttpHeaders {
    if (!headers) {
      headers = new HttpHeaders();
    }
    return headers
      .set('Content-Type', 'application/json')
      .set('Authorization', this.authToken)
      .set('API_Key', GlobalConstants.API_KEY);
  }
}
