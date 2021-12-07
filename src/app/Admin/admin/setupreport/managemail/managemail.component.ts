import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managemail',
  templateUrl: './managemail.component.html',
  styleUrls: ['./managemail.component.css']
})
export class ManagemailComponent implements OnInit {
allChecked = false;
  //DataList: DatatoList[] = [];
  GetManageMailData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ViewManageMailData();
  }
ViewManageMailData() {
    this.GetManageMailData = [
      {
        "to":"sand@gmail.com",
        "subject":"CCMS Recharge by Paytm Transaction Success",
        "createddate": "08/06/2021 :02:48:12",
        "senddate": "08/06/2021 :02:48:12",
        "status": "Sent"
      },
      {
        "to":"agni_saurabh@yahoo.com",
        "subject":"CCMS Recharge by Paytm Transaction Success",
        "createddate": "08/06/2021 :12:05:25",
        "senddate": "08/06/2021 :12:05:25",
        "status": "Sent"
      },
      {
        "to":"t_pankajs1@verifone.com",
        "subject":"Lube Order Update",
        "createddate": "07/06/2021 :06:28:04",
        "senddate": "",
        "status": "Failed"
      }
    ];
  }
  limitChange(limit: number) {
   
  }
   toggleCheckAll() {
    this.setList(this.allChecked);
  }
  setList(checkAll: boolean) {
    // this.DataList.forEach((c: DatatoList) => {
    //   c.isChecked = checkAll;
    //});
  }
  setAllChecked() {
    //return this.fgSystemList.filter((c: FgSystemToList) => c.isChecked === true).length === this.fgSystemList.length;
  }
}
