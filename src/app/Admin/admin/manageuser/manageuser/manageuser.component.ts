import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
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
        "userid": 1,
        "username": "Suman",
        "email": "suman@gmail.com",
        "lastlogin": "2021-06-01T06:15:04.749Z",
        "userrole": "Admin"

      },
      {
        "userid": 1,
        "username": "Tarique",
        "email": "tarique@gmail.com",
        "lastlogin": "2021-06-01T06:15:04.749Z",
        "userrole": "Admin"
      },
      
      {
        "userid": 1,
        "username": "Tuheed",
        "email": "tuheed@gmail.com",
        "lastlogin": "2021-06-01T06:15:04.749Z",
        "userrole": "Admin"
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
