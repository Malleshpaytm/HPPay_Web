import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/services/datepicker/datepicker.service';

@Component({
  selector: 'app-view-or-update-customer-details',
  templateUrl: './view-or-update-customer-details.component.html',
  styleUrls: ['./view-or-update-customer-details.component.css']
})
export class ViewOrUpdateCustomerDetailsComponent implements OnInit {

  customerCreationFormGroup: FormGroup;
  cityDropdownValues: Array<any>;
  districtDropdownValues: Array<any>;
  statesDropdownValues: Array<any>;
  model1='';
  customerid='';
  customerDetails:any;
  constructor(@Inject(DOCUMENT) private _document: Document,
  private router: Router, private adminService: AdminService, 
  private toastr: ToastrService, private fb: FormBuilder,
  private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.customerCreationFormGroup = this.fb.group({
      title: [''],
      first_name: [''],
      last_name: [''],
      mobile_number: [''],
      dob: [''],
      pincode: [''],
      city: [''],
      state: [''],
      district: [''],
      address: [''],
      gender: [''],
      email: ['']
    });
    
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.customerid = params.customerid;
    }
    );
    this.getCustomerProfileDetails();
    this.getDropdownValues();
    
  }
  getCustomerProfileDetails(){
    let getCustomerProfileDetailsData={
      "mobile_number_or_userid": this.customerid,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.getCustomerProfile(getCustomerProfileDetailsData)
      .subscribe(data=>{
       this.customerDetails=data.data[0];
      })
  }
  onSubmitButtonClick() {
    debugger;
    var date = this.customerCreationFormGroup.controls.dob.value;
    var datearray = date.split("-");

    var newdate = datearray[2] + '-' + datearray[1] + '-' + datearray[0];
    let customerCreationData = {
      "title": this.customerDetails?.title,
      "first_name": this.customerDetails?.first_name,
      "last_name": this.customerDetails?.last_name,
      "mobile_number": this.customerCreationFormGroup.controls.mobile_number.value?this.customerCreationFormGroup.controls.mobile_number.value:this.customerDetails?.user_mobile,
      "dob": this.customerCreationFormGroup.controls.dob.value?this.customerCreationFormGroup.controls.dob.value:this.customerDetails?.dob,
      "pincode": this.customerCreationFormGroup.controls.pincode.value?this.customerCreationFormGroup.controls.pincode.value:this.customerDetails?.pincode,
      "city": this.customerCreationFormGroup.controls.city.value?this.customerCreationFormGroup.controls.city.value:this.customerDetails?.cityCode,
      "state": this.customerCreationFormGroup.controls.state.value?this.customerCreationFormGroup.controls.state.value:this.customerDetails?.stateCode,
      "district": this.customerCreationFormGroup.controls.district.value?this.customerCreationFormGroup.controls.district.value:this.customerDetails?.districtCode,
      "address": this.customerCreationFormGroup.controls.address.value?this.customerCreationFormGroup.controls.address.value:this.customerDetails?.address,
      "gender": this.customerCreationFormGroup.controls.gender.value?this.customerCreationFormGroup.controls.gender.value:this.customerDetails?.gender,
      "email": this.customerCreationFormGroup.controls.email.value?this.customerCreationFormGroup.controls.email.value:this.customerDetails?.user_email,
     
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    this.adminService.updateCustomerProfile(customerCreationData)
      .subscribe(data => {
        debugger;
        if(data.message.toUpperCase()==='RECORD FOUND'){
          this.toastr.success(data.data[0].reason)
        }
        
        else if(data.status_Code===401){
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/']);
          this._document.defaultView.location.reload();
        }
        else{
          this.toastr.error(data.message)
        }

      },
        (err: HttpErrorResponse) => {
          console.log(err)
        })
  }

  getDropdownValues() {
    debugger;
    //City Values
    let cityData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getCity(cityData)
      .subscribe(data => {
        debugger;
        this.cityDropdownValues = data.data;
        this.cityDropdownValues.forEach(ele=>{
          if(ele.cityCode===this.customerDetails?.cityCode){
            this.customerCreationFormGroup.controls.city.setValue(ele.cityCode)
          }
        })
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });

    // district values

    let districtData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getDistrict(districtData)
      .subscribe(data => {
        debugger;
        this.districtDropdownValues = data.data;
        this.districtDropdownValues.forEach(ele=>{
          if(ele.district_Code===this.customerDetails?.districtCode){
            this.customerCreationFormGroup.controls.district.setValue(ele.district_Code)
          }
        })
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
    // state value
    let stateData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getStates(stateData)
      .subscribe(data => {
        debugger;
        this.statesDropdownValues = data.data;
        this.statesDropdownValues.forEach(ele=>{
          if(ele.stateCode===this.customerDetails?.stateCode){
            this.customerCreationFormGroup.controls.state.setValue(ele.stateCode)
          }
        })
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }


}
