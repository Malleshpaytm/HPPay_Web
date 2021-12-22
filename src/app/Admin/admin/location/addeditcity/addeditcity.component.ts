import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isEdit: boolean;
  cityInfo: any;
  constructor(private adminService: AdminService, private fb: FormBuilder, private toastr: ToastrService, 
    private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addEditCityFormGroup = this.fb.group({
      city_Id: ['', Validators.required],
      city_Name: ['', Validators.required],
      city_Code: ['', Validators.required],
      city_Short_Name: ['', Validators.required],
      district_Code: ['', Validators.required],
      state_Code: ['', Validators.required],
    });
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.cityInfo = params.data;
      this.isEdit = params.isEdit
    }
    );
    this.getDistrict();
    this.getState();
    
    if (this.isEdit = true) {
      this.cityInfo = JSON.parse(this.cityInfo);
      this.addEditCityFormGroup.controls.city_Id.setValue(this.cityInfo.city_Id);
      this.addEditCityFormGroup.controls.city_Name.setValue(this.cityInfo.city_Name);
      this.addEditCityFormGroup.controls.city_Code.setValue(this.cityInfo.cityCode);
      this.addEditCityFormGroup.controls.city_Short_Name.setValue(this.cityInfo.cityShortName);
     // this.addEditStateFormGroup.controls.zO_Code.setValue(this.regionalOfficeInfo.rO_ERP_Code);
      // this.updateZonalOfficeFormGroup.controls.state_Id.setValue(this.zonalOfficeInfo.zone_ERPcode);
    
    
    }
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
        if (this.isEdit) {
          this.districtDropdownValues.forEach(ele => {
            if (ele.district_Code === this.cityInfo?.districtCode) {
              this.addEditCityFormGroup.controls.district_Code.setValue(ele.district_Code)
            }
          })
        }
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
        if (this.isEdit = true) {
          this.statesDropdownValues.forEach(ele => {
            if (ele.stateCode == this.cityInfo?.state_Code) {
              this.addEditCityFormGroup.controls.state_Code.setValue(ele.stateCode)
            }
          });
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  onSaveButtonCLick() {
    debugger;
    if(this.addEditCityFormGroup.valid){
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
            this.toastr.success(data.data[0].reason);
            this.addEditCityFormGroup.reset();
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
    else{
      this.toastr.error("Please fill all the necessary details!")
    }
  }
  Reset(){
    this.addEditCityFormGroup.reset();
  }
}
