import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageprofilegroup',
  templateUrl: './manageprofilegroup.component.html',
  styleUrls: ['./manageprofilegroup.component.css']
})
export class ManageprofilegroupComponent implements OnInit {
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetProfileGroupData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor() { }

  ngOnInit(): void {
    this.ViewProfileGroupData();
  }
ViewProfileGroupData() {
    this.GetProfileGroupData = [
      {
        "profilegroupname":"Development Group",
      },
      {
         "profilegroupname":"VFI Operations Group",
      },
      {
         "profilegroupname":"HPCL Group",
      }
    ];
  }
  limitChange(limit: number) {
   
  }
  
}
