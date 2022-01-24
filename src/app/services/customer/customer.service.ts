import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../base-http.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  api_key = this.service.api_key;
  authToken = this.service.authToken;
  constructor(private http: HttpClient, private service: LoginService, private baseHttpService: BaseHttpService) { }
  view_transaction_detail_customer(view_transaction_detail_customerData): Observable<any> {
    debugger;
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': this.authToken,
      'API_Key': this.api_key
    };
    const body = JSON.stringify(view_transaction_detail_customerData);

    return this.http.post(`${this.baseHttpService.hpPayApiRoot}api/hppay/wallet/view_transaction_detail_customer`, body, { 'headers': headers })
  }

  get_customer_account_statement(get_customer_account_statementData): Observable<any> {
    debugger;
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': this.authToken,
      'API_Key': this.api_key
    };
    const body = JSON.stringify(get_customer_account_statementData);

    return this.http.post(`${this.baseHttpService.hpPayApiRoot}api/hppay/wallet/get_customer_account_statement`, body, { 'headers': headers })
  }

}
