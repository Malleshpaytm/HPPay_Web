import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export const retryCount = 3;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _router: Router, private authenticationService: AuthenticationService, private adminService: AdminService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((data:HttpEvent<any>)=>{
        debugger;
        if (data instanceof HttpResponse && [401, 403].includes(data.body.status_Code) && this.authenticationService.getLoggedInUser()) {
          // auto logout if 401 or 403 response returned from api
          this.adminService .refreshToken();
        }
      }))
      .pipe(
      catchError(err => {
        debugger;
      if ([401, 403].includes(err.status) && this.authenticationService.userInfo) {
          // auto logout if 401 or 403 response returned from api
          this.authenticationService.onLogOut();
      }

      const error = (err && err.error && err.error.message) || err.statusText;
      console.error(err);
      return throwError(error);
    }),
  )
  }
}

