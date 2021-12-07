import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notificationconfiguration',
  templateUrl: './notificationconfiguration.component.html',
  styleUrls: ['./notificationconfiguration.component.css']
})
export class NotificationconfigurationComponent implements OnInit {

  
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetManageUserData();
  }

  GetManageUserData() {
    this.GetSaveData = [
      {
        "slno":1,
        "userid": 1,
        "username": "100",
        "email": "1100",
        "lastlogin": "NZ",
        "userrole": "North Zone"

      },
      {
        "slno":2,
        "userid": 1,
        "username": "100",
        "email": "1100",
        "lastlogin": "NZ",
        "userrole": "North Zone"

      },
      {
        "slno":3,
        "userid": 1,
        "username": "100",
        "email": "1100",
        "lastlogin": "NZ",
        "userrole": "North Zone"

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
