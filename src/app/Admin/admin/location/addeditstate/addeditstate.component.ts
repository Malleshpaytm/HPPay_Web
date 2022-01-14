import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addeditstate',
  templateUrl: './addeditstate.component.html',
  styleUrls: ['./addeditstate.component.scss']
})
export class AddeditstateComponent implements OnInit {
  addEditStateFormGroup: FormGroup;
  countryRegions:Array<any>;
  zonalOffices:Array<any>;
  isEdit: boolean;
  stateInfo: any;
  constructor(private fb: FormBuilder, public adminService: AdminService, private toastr: ToastrService, 
    private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addEditStateFormGroup = this.fb.group({
    
      state_Name: [],
      state_Code:[''],
      state_Short_Name: [''],
      country_Reg_Code: [''],
      zO_Code:['']
    });
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.stateInfo = params.data;
      this.isEdit = params.isEdit
    }
    );
    this.getCountryRegions();
    this.getZonalOffices();
    if (this.isEdit = true) {
      this.stateInfo = JSON.parse(this.stateInfo);
      this.addEditStateFormGroup.controls.state_Code.setValue(this.stateInfo.stateCode);
      this.addEditStateFormGroup.controls.state_Name.setValue(this.stateInfo.state_Name);
      this.addEditStateFormGroup.controls.state_Short_Name.setValue(this.stateInfo.stateShortName);
     // this.addEditStateFormGroup.controls.zO_Code.setValue(this.regionalOfficeInfo.rO_ERP_Code);
      // this.updateZonalOfficeFormGroup.controls.state_Id.setValue(this.zonalOfficeInfo.zone_ERPcode);
    
    
    }
  }
  onSaveButtonClick() {
    debugger;
    let stateData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "state_Id": 1,
      "state_Name": this.addEditStateFormGroup.controls.state_Name.value,
      "state_Code": this.addEditStateFormGroup.controls.state_Code.value,
      "state_Short_Name": this.addEditStateFormGroup.controls.state_Short_Name.value,
      "country_Reg_Code": this.addEditStateFormGroup.controls.country_Reg_Code.value?this.addEditStateFormGroup.controls.country_Reg_Code.value:0,
      "zO_Code": this.addEditStateFormGroup.controls.zO_Code.value,
      "e_D_Status": 0
    }
    this.adminService.insert_and_update_state(stateData)
      .subscribe(data => {
        debugger;
       if(data.message.toUpperCase()==="RECORD FOUND"){
          this.toastr.success(data.data[0].reason);
          this.addEditStateFormGroup.reset();
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
  Reset(){
    this.addEditStateFormGroup.reset();
  }
  getCountryRegions(){
    // let countryRegionData = {
    //   "Useragent": "web",
    //   "Userip": "1",
    //   "Userid": "1"
    // }
    // this.adminService.getAllCountryRegions(countryRegionData)
    //   .subscribe(data => {
    //     debugger;
    //     this.countryRegions = data.data;
       
    //   },
    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //     });
  }
  getZonalOffices(){
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
            if (ele.zone_Code == this.stateInfo?.zoCode) {
              this.addEditStateFormGroup.controls.zO_Code.setValue(ele.zone_Code)
            }
          });
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
}
