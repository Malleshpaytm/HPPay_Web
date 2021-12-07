import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './services/admin/admin.service';
import { LoginService } from './services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {
    let getTokenData = {
      "useragent": "web",
      "userip": "1",
    }
    this.loginService.getToken(getTokenData).subscribe(data => {
      if (data.success === true) {
        localStorage.removeItem('token')
        localStorage.setItem('token', data.token)
      }
    })
  }
  title = 'HPCL HP PAY';
  ngOnInit(): void {
    let getTokenData = {
      "useragent": "web",
      "userip": "1",
    }
    this.loginService.getToken(getTokenData).subscribe(data => {
      if (data.success === true) {
        localStorage.removeItem('token')
        localStorage.setItem('token', data.token)
      }
    })
  }


}
