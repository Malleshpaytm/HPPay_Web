import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login/login.service';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  UserName: string = '';
  Password: string = '';
  userInfo = { userrole: '', userid: '', username: '', merchant_id: '' };
  ngOnInit(): void { }

  closeResult: string | undefined;

  constructor(
    private modalService: NgbModal,
    public router: Router,
    private authService: AuthService,
    private toastr: ToastrService, public loginService: LoginService,private http:HttpClient, 
    private baseHttpService: BaseHttpService, private adminService:AdminService
  ) { }

  open(content: any) {
    this.modalService.dismissAll();
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  Login() {
    debugger;
    if (this.UserName == '9907042100' && this.Password == '123456') {
      this.authService.login = true;
      this.authService.userRole = 'customer';
      this.router.navigate(['customer']);
    }
    else if (this.UserName == '3010000000' && this.Password == '123456') {
      this.authService.login = true;
      this.authService.userRole = 'merchant';
      this.router.navigate(['merchant']);
    }

    else {
      // let getTokenData = {
      //   "useragent": "web",
      //   "userip": "1",
      // }
      // this.loginService.getToken(getTokenData).subscribe(data => {
      //   if (data.success === true) {
      //     localStorage.removeItem('token')
      //     localStorage.setItem('token', data.token)
      //   }
      // })
      let loginData =
      {
        "username": this.UserName,
        "password": this.Password,
        "useragent": "web",
        "userip": "1",
        "userid": "1"

      }
      this.loginService.applicationLogin(loginData)
        .subscribe(data => {
          if (data.message.toUpperCase() === "RECORD FOUND") {
            this.userInfo.userid = data.data[0].userid;
            this.userInfo.username = data.data[0].username;
            this.userInfo.userrole = data.data[0].userrole;

            if (data.data[0].userrole.toUpperCase() === 'ADMIN') {
              this.authService.login = true;
              this.authService.userRole = 'admin';
              this.router.navigate(['admin']);
            }
            else if(data.data[0].userrole.toUpperCase() === 'MO'){
              this.authService.login = true;
              this.authService.userRole = 'MO';
              this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
            }
            else if(data.data[0].userrole.toUpperCase() === 'ZO'){
              this.authService.login = true;
              this.authService.userRole = 'ZO';
              this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
            }
            else if(data.data[0].userrole.toUpperCase() === 'HO'){
              this.authService.login = true;
              this.authService.userRole = 'HO';
              this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
            }
            else if(data.data[0].userrole.toUpperCase() === 'CALLCENTER'){
              this.authService.login = true;
              this.authService.userRole = 'Callcenter';
              this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
            }
           else if (data.data[0].userrole.toUpperCase() === "MERCHANT") {
             debugger;
              this.authService.login = true;
              this.userInfo.merchant_id = this.UserName;
              this.authService.userRole = 'merchant';
              this.router.navigate(['merchant']);
            }
            let userInfo = JSON.stringify(this.userInfo);
            localStorage.setItem('userInfo', userInfo);
          }
          else {
            this.toastr.error('Invalid username and password!', '', {
              timeOut: 2000,
            })
          }
        },
          (err: HttpErrorResponse) => {
            this.toastr.error(err.error.message)
          })
    }


    // if (this.UserName == '9907042100' && this.Password == '123456') {
    //   this.authService.login = true;
    //   this.authService.userRole = 'customer';
    //   this.router.navigate(['customer']);
    // } else if (this.UserName == 'sandeepadmin' && this.Password == 'Test@123') {
    //   this.authService.login = true;
    //   this.authService.userRole = 'admin';
    //   this.router.navigate(['admin']);
    // } else {
    //   this.toastr.error('Invalid username and password!', '', {
    //     timeOut: 2000,
    //   });
    // }
  }
  applogin(){
    localStorage.removeItem('token');
    let headersToken = {
      'Content-Type': 'application/json',
      'Secret_Key': 'PVmMSclp834KBIUa9O-XxpBsDJhsi1dsds74CiGaoo5',
      'API_Key': this.loginService.api_key
    };
    debugger;
    let getTokenData = {
      "useragent": "web",
      "userip": "1",
    }
    let loginData =
      {
        "username": this.UserName,
        "password": this.Password,
        "useragent": "web",
        "userip": "1",
        "userid": "1"

      }
    const body1 = JSON.stringify(getTokenData);
     this.http.post(`${this.baseHttpService.hpPayApiRoot}api/hppay/generatetoken`, body1, { 'headers': headersToken })
      .subscribe((data:any) => {
          if (data.success === true) {
            if(typeof(localStorage.getItem("token"))=='undefined'){
              //alert('bbbbb');
            }
            localStorage.setItem('token', data.token);
            this.baseHttpService.authToken='Bearer '+data.token;
            this.loginService.authToken='Bearer '+data.token;
            this.adminService.authToken='Bearer '+data.token;
            let headers = {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+data.token,
              'API_Key':this.loginService.api_key};
            const body=JSON.stringify(loginData);
        
            this.http.post(`${this.baseHttpService.hpPayApiRoot}api/hppay/login/get_user_login`, body,{'headers':headers})
            .subscribe((data:any) => {
              if (data.message.toUpperCase() === "RECORD FOUND") {
                this.userInfo.userid = data.data[0].userid;
                this.userInfo.username = data.data[0].username;
                this.userInfo.userrole = data.data[0].userrole;
    
                if (data.data[0].userrole.toUpperCase() === 'ADMIN') {
                  this.authService.login = true;
                  this.authService.userRole = 'admin';
                  this.router.navigate(['admin']);
                }
                else if(data.data[0].userrole.toUpperCase() === 'MO'){
                  this.authService.login = true;
                  this.authService.userRole = 'MO';
                  this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
                }
                else if(data.data[0].userrole.toUpperCase() === 'ZO'){
                  this.authService.login = true;
                  this.authService.userRole = 'ZO';
                  this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
                }
                else if(data.data[0].userrole.toUpperCase() === 'HO'){
                  this.authService.login = true;
                  this.authService.userRole = 'HO';
                  this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
                }
                else if(data.data[0].userrole.toUpperCase() === 'CALLCENTER'){
                  this.authService.login = true;
                  this.authService.userRole = 'Callcenter';
                  this.router.navigate(['/admin/HPPayCustomer/profilemenu']);
                }
               else if (data.data[0].userrole.toUpperCase() === "MERCHANT") {
                 debugger;
                  this.authService.login = true;
                  this.userInfo.merchant_id = this.UserName;
                  this.authService.userRole = 'merchant';
                  this.router.navigate(['merchant/profile']);
                }
                let userInfo = JSON.stringify(this.userInfo);
                localStorage.setItem('userInfo', userInfo);
              }
              else {
                this.toastr.error('Invalid username and password!', '', {
                  timeOut: 2000,
                })
              }
            },
              (err: HttpErrorResponse) => {
                this.toastr.error(err.error.message)
              })
          }
        })
  }

  public isMenuCollapsed = true;
}
