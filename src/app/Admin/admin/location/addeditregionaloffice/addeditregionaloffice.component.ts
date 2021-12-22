import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  districtDropdownValues: Array<any>;
  headOfficesDropdownValues: Array<any>;
  isEdit: boolean;
  regionalOfficeInfo: any;
  constructor(private adminService: AdminService, private fb: FormBuilder,
    private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateRegionalOfficeFormGroup = this.fb.group({
      rO_Code: ['', Validators.required],
      rO_Name: ['', Validators.required],
      rO_Short_Name: ['', Validators.required],
      rO_ERP_Code: ['', Validators.required],
      zO_Code: ['', Validators.required],
      hO_Code: ['', Validators.required],
      district_Code: ['', Validators.required],
      e_D_Status: ['', Validators.required]
    });
    this.route.queryParams
      .subscribe(params => {
        debugger;
        this.regionalOfficeInfo = params.data;
        this.isEdit = params.isEdit
      }
      );
    this.getZonalOffices();
    this.getDistrict();
    this.getHeadOffices();
    
    if (this.isEdit = true) {
      this.regionalOfficeInfo = JSON.parse(this.regionalOfficeInfo);
      this.updateRegionalOfficeFormGroup.controls.rO_Code.setValue(this.regionalOfficeInfo.rO_Code);
      this.updateRegionalOfficeFormGroup.controls.rO_Name.setValue(this.regionalOfficeInfo.rO_Name);
      this.updateRegionalOfficeFormGroup.controls.rO_Short_Name.setValue(this.regionalOfficeInfo.rO_Short_Name);
      this.updateRegionalOfficeFormGroup.controls.rO_ERP_Code.setValue(this.regionalOfficeInfo.rO_ERP_Code);
      // this.updateZonalOfficeFormGroup.controls.state_Id.setValue(this.zonalOfficeInfo.zone_ERPcode);
    
    
    }
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
        if (this.isEdit = true) {
          this.zonalOffices.forEach(ele => {
            if (ele.zone_Code == this.regionalOfficeInfo?.zO_Code) {
              this.updateRegionalOfficeFormGroup.controls.zO_Code.setValue(ele.zone_Code)
            }
          });
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  getDistrict() {
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
        if (this.isEdit = true) {
          this.districtDropdownValues.forEach(ele => {
            if (ele.district_Code == this.regionalOfficeInfo?.district_Code) {
              this.updateRegionalOfficeFormGroup.controls.district_Code.setValue(ele.district_Code)
            }
          });
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }
  getHeadOffices() {
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
        if (this.isEdit = true) {
          this.headOfficesDropdownValues.forEach(ele => {
            if (ele.hO_Code == this.regionalOfficeInfo?.hO_Code) {
              this.updateRegionalOfficeFormGroup.controls.hO_Code.setValue(ele.hO_Code)
            }
          });
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }
  onSaveButtonClick() {
    debugger;
    if(this.updateRegionalOfficeFormGroup.valid){
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
          if (data.message.toUpperCase() === "RECORD FOUND") {
            this.toastr.success(data.data[0].reason);
            this.updateRegionalOfficeFormGroup.reset();
          }
          else if (data.status_Code === 401) {
            this.adminService.refreshToken();
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
  Reset() {
    this.updateRegionalOfficeFormGroup.reset();
  }

}
