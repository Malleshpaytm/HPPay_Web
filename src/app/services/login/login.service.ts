import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../base-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_key=`1BA280E6-BAD6-4AD8-9C2B-6CD5777F517B`;
authToken='Bearer '+localStorage.getItem('token')
  //authToken=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IndlYiIsIm5iZiI6MTYzMzUxMjMxNywiZXhwIjoxNjMzNTE0MTE3LCJpYXQiOjE2MzM1MTIzMTcsImlzcyI6IjEiLCJhdWQiOiIxIn0.-ajmSMGOWRPPSFBDxIscIjzm3sA6a50IfGwVwsBkxPM`;
  forLocalHost='http://180.179.198.148:8086/';
  //forLocalHost='http://localhost:8086/';
  //forServer='http://180.179.198.148:8086/'
  constructor(private http:HttpClient, private baseHttpService: BaseHttpService) {}
  applicationLogin(loginData:any): Observable<any> {
    debugger;
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': this.authToken,
      'API_Key':this.api_key};
    const body=JSON.stringify(loginData);

    return this.http.post(`${this.baseHttpService.hpPayApiRoot}api/hppay/login/get_user_login`, body,{'headers':headers})
  }



  getToken(getTokenData): Observable<any> {
    let headers = {
      'Content-Type': 'application/json',
      'Secret_Key': 'PVmMSclp834KBIUa9O-XxpBsDJhsi1dsds74CiGaoo5',
      'API_Key': this.api_key
    };
    const body = JSON.stringify(getTokenData);

    return this.http.post(`${this.baseHttpService.hpPayApiRoot}api/hppay/generatetoken`, body, { 'headers': headers })
  }


}
//x7r2lm83
