import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addeditdistrict',
  templateUrl: './addeditdistrict.component.html',
  styleUrls: ['./addeditdistrict.component.css']
})
export class AddeditdistrictComponent implements OnInit {
  statesDropdownValues: Array<any>;
  cityDropdownValues: Array<any>;
  regionalOfficeDropdownValues: Array<any>;
  addEditDistrictFormGroup:FormGroup;
  constructor(private adminService: AdminService, private fb: FormBuilder, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.getState();
    this.getCity();
    this.getRegionalOffice();
    this.addEditDistrictFormGroup=this.fb.group({
      district_Code: [''],
      district_Name: [''],
      district_Short_Name: [''],
      city_Code: [''],
      state_Code: [''],
      rO_Code: [''],
    })
  }
  getState() {
    debugger;
    let stateData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getStates(stateData)
      .subscribe(data => {
        debugger;
        this.statesDropdownValues = data.data;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  getCity() {
    debugger;
    let cityData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getCity(cityData)
      .subscribe(data => {
        debugger;
        this.cityDropdownValues = data.data;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  getRegionalOffice() {
    debugger;
    let stateData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getRegionalOffice(stateData)
      .subscribe(data => {
        debugger;
        this.regionalOfficeDropdownValues = data.data;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }

  onSaveButtonCLick(){
    debugger;
    let districtData={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "district_Code":this.addEditDistrictFormGroup.controls.district_Code.value,
      "district_Name": this.addEditDistrictFormGroup.controls.district_Name.value,
      "district_Short_Name": this.addEditDistrictFormGroup.controls.district_Short_Name.value,
      "city_Code": this.addEditDistrictFormGroup.controls.city_Code.value,
      "state_Code": this.addEditDistrictFormGroup.controls.state_Code.value,
      "rO_Code": this.addEditDistrictFormGroup.controls.rO_Code.value,
      "e_D_Status": 0
    }
    this.adminService.insert_and_update_district(districtData)
      .subscribe(data => {
        debugger;
       if(data.message.toUpperCase()==="RECORD FOUND"){
          this.toastr.success(data.data[0].reason)
       }
       else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
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
