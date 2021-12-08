import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addeditregionaloffice',
  templateUrl: './addeditregionaloffice.component.html',
  styleUrls: ['./addeditregionaloffice.component.scss']
})
export class AddeditregionalofficeComponent implements OnInit {
  updateRegionalOfficeFormGroup: FormGroup;
  zonalOffices: Array<any>;
  regionalOffices: Array<any>;
  districtDropdownValues:Array<any>;
  headOfficesDropdownValues:Array<any>;
  constructor(private adminService:AdminService,private fb: FormBuilder,private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.updateRegionalOfficeFormGroup = this.fb.group({
      rO_Code: [''],
      rO_Name: [''],
      rO_Short_Name: [''],
      rO_ERP_Code: [''],
      zO_Code: [''],
      hO_Code: [''],
      district_Code: [''],
      e_D_Status: ['']
    });
    this.getZonalOffices();
    this.getDistrict();
    this.getHeadOffices();
  }
  getZonalOffices() {
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
  getDistrict(){
    //get district
    let districtData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getDistrict(districtData)
      .subscribe(data => {
        debugger;
        this.districtDropdownValues = data.data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
      );
  }
  getHeadOffices(){
    //get head offices
    debugger;
    let headOfficesData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getHeadOffices(headOfficesData)
      .subscribe(data => {
        debugger;
        this.headOfficesDropdownValues = data.data;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
      );
  }
  onSaveButtonClick(){
    debugger;
    let insert_and_update_regional_officeData = {
      "rO_Code": this.updateRegionalOfficeFormGroup.controls.rO_Code.value,
      "rO_Name": this.updateRegionalOfficeFormGroup.controls.rO_Name.value,
      "rO_Short_Name": this.updateRegionalOfficeFormGroup.controls.rO_Short_Name.value,
      "rO_ERP_Code": this.updateRegionalOfficeFormGroup.controls.rO_ERP_Code.value,
      "zO_Code": this.updateRegionalOfficeFormGroup.controls.zO_Code.value,
      "hO_Code": this.updateRegionalOfficeFormGroup.controls.hO_Code.value,
      "district_Code": this.updateRegionalOfficeFormGroup.controls.district_Code.value,
      "e_D_Status": 0,
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    this.adminService.insert_and_update_regional_office(insert_and_update_regional_officeData)
      .subscribe(data => {
        debugger;
       if(data.message.toUpperCase()==="RECORD FOUND"){
          this.toastr.success(data.data[0].reason);
          this.updateRegionalOfficeFormGroup.reset();
       }
       else if(data.status_Code===401){
        this.adminService.refreshToken();
      }
       else{
         this.toastr.error(data.data[0].reason)
       }
       
      },
      
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }
}
