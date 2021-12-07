import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addeditcountryregion',
  templateUrl: './addeditcountryregion.component.html',
  styleUrls: ['./addeditcountryregion.component.scss']
})
export class AddeditcountryregionComponent implements OnInit {
  updateCountryRegionsFormGroup: FormGroup;
  statesDropdownValues: Array<any>
  constructor(private adminService: AdminService, private fb: FormBuilder, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.updateCountryRegionsFormGroup = this.fb.group({
      zO_Code: [''],
      zO_Name: [''],
      zO_Short_Name: [''],
      zO_ERP_Code: [],
      state_Id: [''],
      e_D_Status: ['']
    });
    this.getState()
  }
  onSaveButtonCLick() {
    debugger;
    let insert_and_update_zoneData = {
      "zO_Code": this.updateCountryRegionsFormGroup.controls.zO_Code.value,
      "zO_Name": this.updateCountryRegionsFormGroup.controls.zO_Name.value,
      "zO_Short_Name": this.updateCountryRegionsFormGroup.controls.zO_Short_Name.value,
      "zO_ERP_Code": this.updateCountryRegionsFormGroup.controls.zO_ERP_Code.value,
      "state_Id": this.updateCountryRegionsFormGroup.controls.state_Id.value,
      "e_D_Status": 0,
      "useragent": "web",
      "userip": "1",
      "userid": "1",

    }

    // this.adminService.insert_and_update_countryRegions(insert_and_update_zoneData)
    //   .subscribe(data => {
    //     debugger;
    //     if (data.message.toUpperCase() === "RECORD FOUND") {
    //       this.toastr.success(data.data[0].reason)
    //     }
    //     else if(data.status_Code===401){
    //       this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
    //       this.router.navigate(['/'])
    //     }
    //     else {
    //       this.toastr.error(data.data[0].reason)
    //     }

    //   },

    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //     });
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
}
