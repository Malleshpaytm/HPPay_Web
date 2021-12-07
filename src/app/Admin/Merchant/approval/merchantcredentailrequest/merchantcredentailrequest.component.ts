import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantcredentailrequest',
  templateUrl: './merchantcredentailrequest.component.html',
  styleUrls: ['./merchantcredentailrequest.component.css']
})
export class MerchantcredentailrequestComponent implements OnInit {
  isshow: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
  }

}
