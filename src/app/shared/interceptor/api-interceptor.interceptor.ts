import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const reqCopy = request.clone({
  //     body
  // })
  debugger;
  if(request.body){
    const body = {...request.body,"useragent": "web",
    "userip": "1",
    "userid": "1"}
    const reqCopy = request.clone({
      body
  })
  return next.handle(reqCopy);
  }
 // else if{}
    
    return null  
  }
}
