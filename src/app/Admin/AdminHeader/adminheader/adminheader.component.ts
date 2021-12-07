import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css'],
})
export class AdminheaderComponent implements OnInit {
  showBody: boolean = false;
  entityTypeValue: string = '';
  UserInfoLocalStorageDataString = localStorage.getItem('userInfo');
  UserInfoLocalStorageDataConverted={ userrole: '', userid: '', username: '' }
  constructor(public router: Router,@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this.UserInfoLocalStorageDataConverted=JSON.parse(this.UserInfoLocalStorageDataString || '{}');
  }

  changeRoute(event: any, route: string) {
    event.stopPropagation();
    this.router.navigate([route]);
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }

}
