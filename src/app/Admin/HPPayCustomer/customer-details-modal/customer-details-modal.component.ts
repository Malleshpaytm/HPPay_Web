import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-customer-details-modal',
  templateUrl: './customer-details-modal.component.html',
  styleUrls: ['./customer-details-modal.component.css']
})
export class CustomerDetailsModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CustomerDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private adminService: AdminService, private fb: FormBuilder) { }
  rawCustomerDetailsFormGroup: FormGroup;
  customerDetails: any;
  counter = true;


  ngOnInit(): void {
    debugger;
    this.rawCustomerDetailsFormGroup = this.fb.group({
      active_Paycode_Balance: [''],
      address: [''],
      city: [''],
      cityCode: [''],
      customerType: [''],
      customer_Id: [''],
      district: [''],
      districtCode:[''],
      dob: [''],
      fasttag_no: [''],
      first_name: [''],
      gender: [''],
      last_name: [''],
      payback_cardno: [''],
      pincode: [''],
      referralCode:[''],
      state: [''],
      stateCode: [''],
      title: [''],
      user_email: [''],
      user_mobile: [''],
      vehicle_no: [''],

    })
    this.getCustomerProfileDetails();
    debugger;


  }
  getCustomerProfileDetails() {
    let getCustomerProfileDetailsData = {
      "mobile_number_or_userid": this.data.customerid,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.getCustomerProfile(getCustomerProfileDetailsData)
      .subscribe(data => {
        this.customerDetails = data.data[0];
      })
  }



}
