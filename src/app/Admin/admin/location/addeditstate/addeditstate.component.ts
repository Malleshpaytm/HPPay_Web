import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, public adminService: AdminService, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.addEditStateFormGroup = this.fb.group({
    
      state_Name: [],
      state_Code:[''],
      state_Short_Name: [''],
      country_Reg_Code: [''],
      zO_Code:['']
    });
    this.getCountryRegions();
    this.getZonalOffices();
  }
  onSaveButtonClick() {
    let stateData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "state_Id": 1,
      "state_Name": "string",
      "state_Code": 1,
      "state_Short_Name": "string",
      "country_Reg_Code": 1,
      "zO_Code": 1,
      "e_D_Status": 0
    }
    this.adminService.insert_and_update_state(stateData)
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
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
}
