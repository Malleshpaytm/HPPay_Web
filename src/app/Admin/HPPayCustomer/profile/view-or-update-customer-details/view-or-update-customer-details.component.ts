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
    this.getDropdownValues();
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.customerid = params.customerid;
    }
    );
    this.getCustomerProfileDetails();
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
      "title": this.customerCreationFormGroup.controls.title.value,
      "first_name": this.customerCreationFormGroup.controls.first_name.value,
      "last_name": this.customerCreationFormGroup.controls.last_name.value,
      "mobile_number": this.customerCreationFormGroup.controls.mobile_number.value,
      "dob": this.customerCreationFormGroup.controls.dob.value,
      "pincode": this.customerCreationFormGroup.controls.pincode.value,
      "password": "",
      "city": this.customerCreationFormGroup.controls.city.value,
      "state": this.customerCreationFormGroup.controls.state.value,
      "district": this.customerCreationFormGroup.controls.district.value,
      "address": this.customerCreationFormGroup.controls.address.value,
      "gender": this.customerCreationFormGroup.controls.gender.value,
      "email": this.customerCreationFormGroup.controls.email.value,
      "isaccept_policy": "0",
      "isScoialMedia": "0",
      "media_type": "",
      "deviceToken": "",
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    this.adminService.customerRegistration(customerCreationData)
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

      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }


}
