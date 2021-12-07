import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantaccountstatementdownload',
  templateUrl: './merchantaccountstatementdownload.component.html',
  styleUrls: ['./merchantaccountstatementdownload.component.css']
})
export class MerchantaccountstatementdownloadComponent implements OnInit {
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
