import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  UserName: string = '';
  Password: string = '';
  userInfo = { userrole: '', userid: '', username: '' };
  ngOnInit(): void { }

  closeResult: string | undefined;

  constructor(
    private modalService: NgbModal,
    public router: Router,
    private authService: AuthService,
    private toastr: ToastrService, public loginService: LoginService
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
            let userInfo = JSON.stringify(this.userInfo)
            localStorage.setItem('userInfo', userInfo)
            if (data.data[0].userrole.toUpperCase() === 'ADMIN') {
              this.authService.login = true;
              this.authService.userRole = 'admin';
              this.router.navigate(['admin']);
            }
           else if (data.data[0].userrole.toUpperCase() === "MERCHANT") {
             debugger;
              this.authService.login = true;
              this.authService.userRole = 'merchant';
              this.router.navigate(['merchant']);
            }

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

  public isMenuCollapsed = true;
}
