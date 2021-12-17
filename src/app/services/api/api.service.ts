import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { LoginService } from '../login/login.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService  {
  api_key=this.service.api_key;
  authToken=this.service.authToken;
  forLocalHost=this.service.forLocalHost;
  constructor(private http: HttpClient, private service:LoginService) {
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    debugger;

      return this.http
        .get<any>(this.createUrl(path), {
          observe: 'response',
          headers: this.setHeaders(),
          params,
        }).pipe(
          catchError(this.handleError)
        );
  }

  put(path: string, body: Object = {}, params = new HttpParams()): Observable<any> {
    debugger;
    return this.http
      .put(this.createUrl(path), body, {
        headers: this.setHeaders(),
        params,
      }).pipe(
        catchError(this.handleError)
      );
  }

  post(path: string, body: Object = {}, targetAPI?: string): Observable<any> {
      return this.http
        .post(this.createUrl(path, targetAPI), body, {
          headers: this.setHeaders(body),
        }).pipe(
          catchError(this.handleError)
        );
  }

  delete(path, body = ''): Observable<any> {
    debugger;
    return this.http
      .delete(`${this.createUrl(path)}/${body}`, { headers: this.setHeaders() }).pipe(
        catchError(this.handleError)
      );
  }

  patch(path, body: Object = {}): Observable<any> {
    debugger;
    return this.http
      .patch(this.createUrl(path), body, { headers: this.setHeaders() }).pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }

  private setHeaders(body?: any, headers?: Array<any>): HttpHeaders {
    const headersConfig = {};
    if (body !== undefined && body instanceof FormData) {
      headersConfig['enctype'] = 'multipart/form-data';
    }
    headersConfig['Accept'] = 'application/json';
    headersConfig['Content-Type']= 'application/json';
    headersConfig['Authorization']= this.authToken;
    headersConfig['API_Key']= this.api_key;
    return new HttpHeaders(headersConfig);
  }

  private createUrl(path, targetApiEndpoint = `${this.forLocalHost}180.179.222.161/hpp/api`) {
    return targetApiEndpoint+path;
  }
}
