import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  headOfficesDropdownValues: Array<any>;
  countryRegionsDropdownValues:Array<any>;
  regionalOfficesDropdownValues:Array<any>;
  adminRolesDropdownValues:Array<any>;
  addUserFormGroup:FormGroup;
  constructor(private adminService: AdminService, private toastr: ToastrService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getDropdownValues();
    this.getAllRoles();
    this.addUserFormGroup=this.fb.group({
      userName:[''],
      email:['',Validators.email],
      password:[''],
      confirmPassword:[''],
      secretQuestion:[''],
      secretAnswer:[''],
      role_id:[''],
      hq_id:[''],
      zone_id:[''],
      region_id:[''],
    })
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
  getDropdownValues() {
    debugger;
    //HEAD OFFICES
    let headOfficesData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.getHeadOffice(headOfficesData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.headOfficesDropdownValues=data.data;
        }
        else { }


      },
        (err: HttpErrorResponse) => {
          console.log(err)
        })


     //get regional office data
     let regionalOfficeData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getRegionalOffice(regionalOfficeData)
      .subscribe(data => {
        debugger;
        this.regionalOfficesDropdownValues = data.data;
        
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  createUser(){
    debugger;
    let createUserDate={
      "user_Name": this.addUserFormGroup.controls.userName.value,
      "email": this.addUserFormGroup.controls.email.value,
      "password": this.addUserFormGroup.controls.password.value,
      "secret_Question": this.addUserFormGroup.controls.secretQuestion.value,
      "secret_Answer": this.addUserFormGroup.controls.secretAnswer.value,
      "role_Id":this.addUserFormGroup.controls.role_id.value,
      "hQ_Id": this.addUserFormGroup.controls.hq_id.value,
      "zone_Id":this.addUserFormGroup.controls.zone_id.value,
      "region_Id": this.addUserFormGroup.controls.zone_id.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.createManagerRole(createUserDate)
    .subscribe(data=>{
      if (data.message.toUpperCase() === 'RECORD FOUND') {
        debugger;
      }
    })
  }

}
