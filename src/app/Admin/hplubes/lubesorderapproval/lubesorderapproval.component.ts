import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lubesorderapproval',
  templateUrl: './lubesorderapproval.component.html',
  styleUrls: ['./lubesorderapproval.component.css']
})
export class LubesorderapprovalComponent implements OnInit {
  isshow: number = 0;
  GetSavedData: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 5;



  constructor() { }

  ngOnInit(): void {
    this.ManageOfficers();
  }
  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
  }
  ManageOfficers() {
    this.GetSavedData = [
      {
        "orderrefnumber": "ORDREF2100000682",
        "productname": "Racer 20W 40",
        "quantity": 1,
        "netamount": "200.00",
        "orderstatus": "Replacement Rejected",
        "orderdate": "04/06/2021 09:00:00",
        "requestdate": "04/06/2021 11:39:44",
        "merchantcode": "3319733700"
      }
    ];
  }

}
