import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-managerolelist',
  templateUrl: './managerolelist.component.html',
  styleUrls: ['./managerolelist.component.scss']
})
export class ManagerolelistComponent implements OnInit {

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  adminRolesDropdownValues:Array<any>
  constructor(private adminService: AdminService, private toastr: ToastrService, 
    private fb: FormBuilder, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles() {
    debugger;
    let getAllRolesData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "role_Name": 0
    }
    this.adminService.getAllRoles(getAllRolesData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.adminRolesDropdownValues = data.data
          debugger;
        }
        else if(data.status_Code===401){
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
         
        }
      },
        (err: HttpErrorResponse) => {
          err;
        });
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
