import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isEdit: boolean;
  districtInfo: any;
  constructor(private adminService: AdminService, private fb: FormBuilder, private toastr: ToastrService, 
    private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getState();
    this.getCity();
    this.getRegionalOffice();
    this.addEditDistrictFormGroup=this.fb.group({
      district_Code: ['', Validators.required],
      district_Name: ['', Validators.required],
      district_Short_Name: ['', Validators.required],
      city_Code: ['', Validators.required],
      state_Code: ['', Validators.required],
      rO_Code: ['', Validators.required],
    });
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.districtInfo = params.data;
      this.isEdit = params.isEdit
    }
    );
    if (this.isEdit = true) {
      this.districtInfo = JSON.parse(this.districtInfo);
      this.addEditDistrictFormGroup.controls.district_Code.setValue(this.districtInfo.district_Code);
      this.addEditDistrictFormGroup.controls.district_Name.setValue(this.districtInfo.district_Name);
      this.addEditDistrictFormGroup.controls.district_Short_Name.setValue(this.districtInfo.district_Short_Name);
     // this.addEditStateFormGroup.controls.zO_Code.setValue(this.regionalOfficeInfo.rO_ERP_Code);
      // this.updateZonalOfficeFormGroup.controls.state_Id.setValue(this.zonalOfficeInfo.zone_ERPcode);
    
    
    }
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
            if (ele.stateCode == this.districtInfo?.state_Code) {
              this.addEditDistrictFormGroup.controls.state_Code.setValue(ele.stateCode)
            }
          });
        }
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
        if (this.isEdit = true) {
          this.cityDropdownValues.forEach(ele => {
            if (ele.cityCode == this.districtInfo?.city_Code) {
              this.addEditDistrictFormGroup.controls.city_Code.setValue(ele.cityCode)
            }
          });
        }
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
        if (this.isEdit = true) {
          this.regionalOfficeDropdownValues.forEach(ele => {
            if (ele.rO_Code == this.districtInfo?.rO_Code) {
              this.addEditDistrictFormGroup.controls.rO_Code.setValue(ele.rO_Code)
            }
          });
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }

  onSaveButtonCLick(){
    debugger;
    if(this.addEditDistrictFormGroup.valid){
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
            this.toastr.success(data.data[0].reason);
            this.addEditDistrictFormGroup.reset();
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
    else{
      this.toastr.error("Please fill all the necessary details!")
    }
  }
  Reset(){
    this.addEditDistrictFormGroup.reset();
  }
}
