import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lubedetail',
  templateUrl: './lubedetail.component.html',
  styleUrls: ['./lubedetail.component.css']
})
export class LubedetailComponent implements OnInit {
  GetSavedData: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 5;



  constructor() { }

  ngOnInit(): void {
    this.ManageOfficers();
  }
  ManageOfficers() {
    this.GetSavedData = [
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Replacement Rejected",
        "actiondate": "04/06/2021 12:57 PM",
        "actioncomment": "Rejected by SO"
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Replacement Requested",
        "actiondate": "04/06/2021 11:39 AM",
        "actioncomment": "Replacement request by customer"
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Delivered",
        "actiondate": "04/06/2021 11:37 AM",
        "actioncomment": ""
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Dispatched",
        "actiondate": "04/06/2021 11:37 AM",
        "actioncomment": ""
      },
      {
        "orderrefnumber": "ORDREF2100000682",
        "orderstatus": "Successful",
        "actiondate": "04/06/2021 09:00 AM",
        "actioncomment": "Requested by customer"
      }
    ];
  }

}
