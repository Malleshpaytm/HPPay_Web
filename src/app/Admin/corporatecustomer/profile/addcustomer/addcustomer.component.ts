import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  corporateCustomerCreationFormGroup: FormGroup;
  cityDropdownValues: Array<any>;
  districtDropdownValues: Array<any>;
  statesDropdownValues: Array<any>;
  zonalOffices: Array<any>;
  regionalOffices: Array<any>;
  constructor(@Inject(DOCUMENT) private _document: Document,
  private router: Router, private adminService: AdminService, 
  private toastr: ToastrService, private fb: FormBuilder,
  private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.corporateCustomerCreationFormGroup = this.fb.group({
      customerType: ['', Validators.required],
      entityType: ['' , Validators.required],
      companyName: ['' , Validators.required],
      companyPhoneNo: ['' , Validators.required],
      companyMobileNo: ['' , Validators.required],
      comapnyEmailAddress: ['' , Validators.compose([Validators.required, Validators.email])],
      companyAddress:['', Validators.required],
      city: ['' , Validators.required],
      state: ['' , Validators.required],
      district: ['' , Validators.required],
      zonalOffice: ['', Validators.required],
      regionalOffice: ['', Validators.required],
      pinCode: ['', Validators.required],
      firstName: ['' , Validators.required],
      lastName: ['', Validators.required],
      contactPersonMobileNo: ['', Validators.required],
      contactPersonEmailAddress: ['', Validators.email]
    });
    this.getDropdownValues();
  }
  getDropdownValues() {
    
    //City Values
    let cityData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getCity(cityData)
      .subscribe(data => {
        
        this.cityDropdownValues = data.data;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });

    // district values

    let zonalOfficeData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getZonalOffice(zonalOfficeData)
      .subscribe(data => {
        
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.zonalOffices = data.data;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
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

         //get regional office data
    let regionalOfficeData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getRegionalOffice(regionalOfficeData)
      .subscribe(data => {
        
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.regionalOffices = data.data;
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  onSubmitButtonClick() {
   
    
    //console.log(this.corporateCustomerCreationFormGroup.controls);
    if(this.corporateCustomerCreationFormGroup.valid){
      const message = `Are you sure you want to create this corporate customer?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
      let customerCreationData = {
        "deviceToken": "0",
        "customerType": this.corporateCustomerCreationFormGroup.controls.customerType.value,
        "entityType":this.corporateCustomerCreationFormGroup.controls.entityType.value,
        "companyName": this.corporateCustomerCreationFormGroup.controls.companyName.value,
        "companyPhoneNo":this.corporateCustomerCreationFormGroup.controls.companyPhoneNo.value,
        "companyMobileNo": this.corporateCustomerCreationFormGroup.controls.companyMobileNo.value,
        "companyEmailAddress": this.corporateCustomerCreationFormGroup.controls.comapnyEmailAddress.value,
        "companyAddress": this.corporateCustomerCreationFormGroup.controls.companyAddress.value,
        "city": this.corporateCustomerCreationFormGroup.controls.city.value,
        "state": this.corporateCustomerCreationFormGroup.controls.state.value,
        "district":this.corporateCustomerCreationFormGroup.controls.district.value,
        "zonaloffice": this.corporateCustomerCreationFormGroup.controls.zonalOffice.value,
        "regionaloffice": this.corporateCustomerCreationFormGroup.controls.regionalOffice.value,
        "pincode": this.corporateCustomerCreationFormGroup.controls.pinCode.value,
        "contactFirstName": this.corporateCustomerCreationFormGroup.controls.firstName.value,
        "contactLastName": this.corporateCustomerCreationFormGroup.controls.lastName.value,
        "contactMobileNo":this.corporateCustomerCreationFormGroup.controls.contactPersonMobileNo.value,
        "contactEmailAddress": this.corporateCustomerCreationFormGroup.controls.contactPersonEmailAddress.value,
        "kycRegCertificate": {
          "contentType": "string",
          "contentDisposition": "string",
          "headers": {},
          "length": 0,
          "name": "string",
          "fileName": "string"
        },
        "kycPanCard": {
          "contentType": "string",
          "contentDisposition": "string",
          "headers": {},
          "length": 0,
          "name": "string",
          "fileName": "string"
        },
        "kycAddress": {
          "contentType": "string",
          "contentDisposition": "string",
          "headers": {},
          "length": 0,
          "name": "string",
          "fileName": "string"
        },
        "kycTelbill": {
          "contentType": "string",
          "contentDisposition": "string",
          "headers": {},
          "length": 0,
          "name": "string",
          "fileName": "string"
        },
        "useragent": "web",
        "userip": "1",
        "userid": "1",
      }
      this.adminService.corporateCustomerRegistration(customerCreationData)
        .subscribe(data => {
         
          if(data.message.toUpperCase()==='RECORD FOUND'){
            this.openDialog(`Corporate customer created successfully with mobile number ${data.data[0].user_mobile}!`);
            this.corporateCustomerCreationFormGroup.reset();
          }
          
          else if(data.status_Code===401){
            // this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
            // this.router.navigate(['/']);
            // this._document.defaultView.location.reload();
          }
          else{
            this.toastr.error(data.message)
          }
  
        },
          (err: HttpErrorResponse) => {
            console.log(err)
          })
        }})
    }
    else{
      this.toastr.error("Please fill all the required fields!")
    }
    // var date = this.customerCreationFormGroup.controls.dob.value;
    // var datearray = date.split("-");

    // var newdate = datearray[2] + '-' + datearray[1] + '-' + datearray[0];
   
  }
  onSelectState(state_code){
    this.getDistrictByState(state_code)
  }
  getDistrictByState(state_code){
    let getDistrictByStateData={
      "state_Code":state_code,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.getDistrictByState(getDistrictByStateData)
      .subscribe(data => {
     
        this.districtDropdownValues = data.data;
      });
  }
  openDialog(message): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
