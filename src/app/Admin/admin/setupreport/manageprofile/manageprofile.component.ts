import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrls: ['./manageprofile.component.css']
})
export class ManageprofileComponent implements OnInit {
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetManageProfileData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
     this.ViewManageProfileData();
  }
  ViewManageProfileData() {
    this.GetManageProfileData = [
      {
        "profilename":"MAILFROM",
        "firstname":"HP PAY reports",
        "lastname": "",
        "email": "report@hppay.in",
        "phone": ""
      },
      {
        "profilename":"REPLYTO Support",
        "firstname":"DTPlusTech Support",
        "lastname": "",
        "email": "helpdesk@drivetrackplus.com",
        "phone": ""
      },
      {
        "profilename":"trsundar",
        "firstname":"trsundar",
        "lastname": "",
        "email": "trsundar@hpcl.in",
        "phone": ""

      }
    ];
  }
  limitChange(limit: number) {
   
  }

}
