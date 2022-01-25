import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  zonalOffices: Array<any>;
  username='';
  searchAdminUserData:any;
  isEdit:boolean=false;

  constructor(private adminService: AdminService, private toastr: ToastrService, 
    private fb: FormBuilder, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDropdownValues();
    this.getAllRoles();
   
    this.addUserFormGroup=this.fb.group({
     userName:['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      
      secretQuestion:['', Validators.required],
      secretAnswer:['',Validators.required],
      role_id:['',Validators.required],
      hq_id:['',Validators.required],
      zone_id:['',Validators.required],
      region_id:['',Validators.required],
    })
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.username = params.username;
      this.isEdit = params.edit
    }
    );
    this.onSearchButtonClick();
    
  }
  password = new FormControl("", [
    Validators.required,
    // Validators.pattern(
    //   "^((?=\\S*?[A-Z])(?=\\S*?[a-z])(?=\\S*?[0-9]).{8,255})\\S$"
    // )
  ]);
  hide = true;
  confirmPassword = new FormControl("", [
    Validators.required,
    this.confirmEquals() 
  ]); 

  confirmEquals(): ValidatorFn {
    debugger;
    return (control: AbstractControl): { [key: string]: any } | null =>  
        control.value?.toLowerCase() === this.passwordValue.toLowerCase() 
            ? null : {noMatch: true};
  }

  get passwordValue() {
    return this.password.value;
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
  onSearchButtonClick() {
    debugger;
    let searchUserData = {
      "username": this.username,
      "email": "",
      "lastlogindate": "",
      "userrole":"",
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.search_admin_user(searchUserData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
        
          this.searchAdminUserData=data.data[0];
          if(this.isEdit){
            this.addUserFormGroup.controls.secretAnswer.setValue(this.searchAdminUserData?.secret_Answer);
            this.addUserFormGroup.controls.email.setValue(this.searchAdminUserData?.email);
            this.addUserFormGroup.controls.email.setValue(this.searchAdminUserData?.email);
            this.addUserFormGroup.controls.userName.setValue(this.searchAdminUserData?.userid);
            this.password.setValue(this.searchAdminUserData?.password);
            this.confirmPassword.setValue(this.searchAdminUserData?.password);
            this.addUserFormGroup.controls.secretQuestion.setValue(this.searchAdminUserData?.secret_Question);
            this.addUserFormGroup.controls.role_id.setValue(this.searchAdminUserData?.role_Id);
            this.addUserFormGroup.controls.hq_id.setValue(this.searchAdminUserData?.hQ_Id);
            this.getDropdownValues();
          }
        }
        else if (data.status_Code === 401) {

          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error(data.message)
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
        if (this.isEdit) {
          this.regionalOfficesDropdownValues.filter(ele => {
            if (ele.rO_Code == this.searchAdminUserData?.region_Id) {
              this.addUserFormGroup.controls.region_id.setValue(ele.rO_Code)
            }
          })
        }
        
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
      let zonalOfficeData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getZonalOffice(zonalOfficeData)
        .subscribe(data => {
          debugger;
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            this.zonalOffices = data.data;
            if (this.isEdit) {
              this.zonalOffices.filter(ele => {
                if (ele.zone_Code == this.searchAdminUserData?.zone_Id) {
                  this.addUserFormGroup.controls.zone_id.setValue(ele.zone_Code)
                }
              })
            }
          }
          else if (data.status_Code === 401) {
            this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
            this.router.navigate(['/'])
          }
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
      "password": this.password.value,
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
        this.toastr.success(data.data[0].reason);
        this.addUserFormGroup.reset();
        this.password.reset();
        this.confirmPassword.reset();
      }
      else if (data.message.toUpperCase() === 'RECORD NOT FOUND') {
        this.toastr.error(data.data[0].reason);
      }
      else if (data.status_Code === 401) {
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }

    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
    
  }
  editUser(){
    debugger;
    let createUserDate={
      "user_Name": this.addUserFormGroup.controls.userName.value,
      "email": this.addUserFormGroup.controls.email.value,
      "password": this.password.value,
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
    this.adminService.updateManageRole(createUserDate)
    .subscribe(data=>{
      if (data.message.toUpperCase() === 'RECORD FOUND') {
        this.toastr.success(data.data[0].reason);
        this.router.navigate(['admin/manageuser'])
        // this.addUserFormGroup.reset();
        // this.password.reset();
        // this.confirmPassword.reset();
      }
      else if (data.status_Code === 401) {
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
    
  }
}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

