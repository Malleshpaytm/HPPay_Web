import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IRandomUsers } from '../../location/regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-userloginlog',
  templateUrl: './userloginlog.component.html',
  styleUrls: ['./userloginlog.component.css']
})
export class UserloginlogComponent implements OnInit {
  UserloginlogFormGroup: FormGroup;
  adminRolesDropdownValues:Array<any>;
  adminUsersDropdownValues:any=[]
  constructor(private adminService: AdminService, private toastr: ToastrService, 
    private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.UserloginlogFormGroup = this.fb.group({
      userrole: ['']
    })
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
  onSelectUserRole(role) {
    debugger;
    let searchUserData = {
      "username": "",
      "email":"",
      "lastlogindate":"",
      "userrole":role,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.search_admin_user(searchUserData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
        this.adminUsersDropdownValues=data.data;
          //this.searchUserTableData=data.data;
          // this.dataArray = data.data;
          //   this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
          //   this.dataSource.paginator = this.paginator;
        }
        else if (data.status_Code === 401) {

          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.adminUsersDropdownValues=[];
          this.toastr.error(data.message);
        }
      },
        (err: HttpErrorResponse) => {
          err;
        });
  }
Reset(){
    
  }
}
