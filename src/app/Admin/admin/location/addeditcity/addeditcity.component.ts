import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addeditcity',
  templateUrl: './addeditcity.component.html',
  styleUrls: ['./addeditcity.component.css']
})
export class AddeditcityComponent implements OnInit {
  addEditCityFormGroup: FormGroup;
  districtDropdownValues:Array<any>;
  statesDropdownValues: Array<any>;
  constructor(private adminService: AdminService, private fb: FormBuilder, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.addEditCityFormGroup = this.fb.group({
      city_Id: [''],
      city_Name: [''],
      city_Code: [''],
      city_Short_Name: [''],
      district_Code: [''],
      state_Code: [''],
    });
    this.getDistrict();
    this.getState();
  }

  getDistrict(){
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
  onSaveButtonCLick() {
    debugger;
    let districtData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "city_Id": this.addEditCityFormGroup.controls.city_Id.value,
      "city_Name": this.addEditCityFormGroup.controls.city_Name.value,
      "city_Code": this.addEditCityFormGroup.controls.city_Code.value,
      "city_Short_Name": this.addEditCityFormGroup.controls.city_Short_Name.value,
      "district_Code": this.addEditCityFormGroup.controls.district_Code.value,
      "state_Code": this.addEditCityFormGroup.controls.state_Code.value,
      "e_D_Status": 0
    }
    this.adminService.insert_and_update_city(districtData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === "RECORD FOUND") {
          this.toastr.success(data.data[0].reason)
        }
        else if(data.status_Code===401){
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error(data.data[0].reason)
        }

      },

        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
}
