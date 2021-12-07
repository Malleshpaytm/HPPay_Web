import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managebanklimit',
  templateUrl: './managebanklimit.component.html',
  styleUrls: ['./managebanklimit.component.css']
})
export class ManagebanklimitComponent implements OnInit {

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
        "officerid": 1,
        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      },
      {
        "slno":2,
        "officerid": 1,

        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

      },
      {
        "slno":3,
        "officerid": 1,

        "officertype": "VFIRBI",
        "fname": "Suman",
        "lname": "Sumanta",
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "Location": "Odisha"

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
