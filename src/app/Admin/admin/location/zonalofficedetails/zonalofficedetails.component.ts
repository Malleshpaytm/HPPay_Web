import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-zonalofficedetails',
  templateUrl: './zonalofficedetails.component.html',
  styleUrls: ['./zonalofficedetails.component.scss']
})
export class ZonalofficedetailsComponent implements OnInit {

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  paginateData: any[] = [];
  collectionSize=0;
  public page: number = 1;
  public pageSize: number = 2;
  zonalOffices:Array<any>;
  constructor(private modalService: NgbModal, public adminService:AdminService) { }

  ngOnInit(): void {
    debugger
   // this.GetManageUserData();
    let zonalOfficeData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getZonalOffice(zonalOfficeData)
      .subscribe(data => {
        debugger;
        this.zonalOffices = data.data;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  getPremiumData(){
    
    this.paginateData =  this.zonalOffices
     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
     
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
