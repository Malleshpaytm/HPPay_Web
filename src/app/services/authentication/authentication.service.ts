import { Injectable,Optional,SkipSelf} from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../../shared/Models/user'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  userInfo : User;

  constructor(@Optional() @SkipSelf() sharedService: AuthenticationService , private loginService:LoginService,private router: Router) {
    if(!sharedService)
    {
      console.log("user service Lodded");
    }
  }

  onLogin(userName,password,mobileno='0'): Observable<User> {
    debugger;
    let loginData =
    {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "username": userName,
      "password": password,
      "mobileno": mobileno
    }
    this.userInfo= new User();
    var userSubject = new Subject<User>();
    this.loginService.applicationLogin(loginData)
      .subscribe(data => {
        debugger;
          this.userInfo.message= data.message;
          this.userInfo.userid = data.data[0].userid;
          this.userInfo.username = data.data[0].username;
          this.userInfo.userrole = data.data[0].userrole;
          localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
          userSubject.next(this.userInfo);
      },
      (err: HttpErrorResponse) => {
        throw err;
      });
      return userSubject.asObservable();
    }

    getLoggedInUser(): User {
      debugger;
        if(this.userInfo === undefined || this.userInfo===null || this.userInfo.userid ===  null || this.userInfo.userid==='')
        {
            this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
            if(this.userInfo === undefined || this.userInfo===null || this.userInfo.userid ===  null || this.userInfo.userid==='')
            {
              this.userInfo=new User();
              this.userInfo.message="Logged Out";
            }
        }
        return this.userInfo;
      }

    onLogOut(): User {
        window.location.reload();
        localStorage.removeItem('userInfo');
        this.userInfo=new User();
        this.userInfo.message="Logged Out";
        this.router.navigate(['../../'])
        return this.userInfo;
    }
}
