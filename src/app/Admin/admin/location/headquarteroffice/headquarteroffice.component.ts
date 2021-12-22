import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-headquarteroffice',
  templateUrl: './headquarteroffice.component.html',
  styleUrls: ['./headquarteroffice.component.css']
})
export class HeadquarterofficeComponent implements OnInit {
  headOfficeDetailsForm: FormGroup | undefined;
  constructor(private fb:FormBuilder,private adminService:AdminService,public toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.headOfficeDetailsForm=this.fb.group({
      headOfficeCode:[''],
      headOfficeName:[''],
      headOfficeShortName:['']
    })
  }
  onSaveButtonClick(){
    debugger;
    let  update_head_officesData = {
      "hO_Code": this.headOfficeDetailsForm.controls.headOfficeCode.value,
      "hO_Name": this.headOfficeDetailsForm.controls.headOfficeName.value,
      "hO_Short_Name": this.headOfficeDetailsForm.controls.headOfficeShortName.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    
    this.adminService.update_head_offices(update_head_officesData)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
          this.toastr.success(data.data[0].reason)
       }
       else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
       else if(data.message.toUpperCase()==="RECORD NOT FOUND"){
         this.toastr.error(data.data[0].reason)
       }
       
      },
      
      (err: HttpErrorResponse) => {
        this.toastr.error(err.toString());
      });
  }
  onResetButtonClick(){
    this.headOfficeDetailsForm.reset();
  }
}
