import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantaccountstatementrequest',
  templateUrl: './merchantaccountstatementrequest.component.html',
  styleUrls: ['./merchantaccountstatementrequest.component.css']
})
export class MerchantaccountstatementrequestComponent implements OnInit {
  entityTypeValue: string = '';
  showBody: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  reportTypeChange(e: any): void {
    this.entityTypeValue = e.target.value;
    if (e.target.value === 'select') {
      this.showBody = false;
    } else {
      this.showBody = true;
    }
  }

}
