import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { CustomAdapter, CustomDateParserFormatter } from 'src/app/services/datepicker/datepicker.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
@Component({
  selector: 'app-createhppaycustomer',
  templateUrl: './createhppaycustomer.component.html',
  styleUrls: ['./createhppaycustomer.component.css'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class CreatehppaycustomerComponent implements OnInit {
  customerCreationFormGroup: FormGroup;
  cityDropdownValues: Array<any>;
  districtDropdownValues: Array<any>;
  statesDropdownValues: Array<any>;
  model1='';
  correctMobileNumber: boolean = true;
  date = new Date();
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(this.date.getFullYear() - 18, 0, 1);
  constructor(@Inject(DOCUMENT) private _document: Document,
  private router: Router, private adminService: AdminService, 
  private toastr: ToastrService, private fb: FormBuilder,
  private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerCreationFormGroup = this.fb.group({
      title: ['', Validators.required],
      first_name: ['' , Validators.required],
      last_name: ['' , Validators.required],
      mobile_number: ['' , Validators.required],
      dob: ['' , Validators.required],
      pincode: ['' , Validators.compose([Validators.required, Validators.min(6)])],
      city: ['' , Validators.required],
      state: ['' , Validators.required],
      district: ['' , Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.email]
    });
    this.getDropdownValues();
  }
  onSubmitButtonClick() {
    debugger;
    if(this.customerCreationFormGroup.valid){
      const message = `Are you sure you want to create this customer?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
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
            this.openDialog(`Customer created successfully with mobile number (${data.data[0].user_mobile})!`)
           
            this.customerCreationFormGroup.reset();
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
  checkMobileNo() {
    debugger;
    let checkMobileNoData =
    {
      "mobileNo": this.customerCreationFormGroup.controls.mobile_number.value,
      "userid": "1",
      "useragent": "web",
      "userip": "1"
    }

    this.adminService.checkMobileNo(checkMobileNoData)
      .subscribe(data => {
        debugger;
        if (data.data[0].value.toUpperCase() === 'VALID') {
          alert("Mobile Number already exists!");
          this.correctMobileNumber = false;
        }
        else {
          this.correctMobileNumber = true;
        }
      });
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
        debugger;
        this.districtDropdownValues = data.data;
      });
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

    // let districtData = {
    //   "Useragent": "web",
    //   "Userip": "1",
    //   "Userid": "1"
    // }
    // this.adminService.getDistrict(districtData)
    //   .subscribe(data => {
    //     debugger;
    //     this.districtDropdownValues = data.data;
    //   },
    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //     }
    //   );
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
     this.statesDropdownValues.sort((a, b) => a.state_Name.localeCompare(b.state_Name))
      },
        (err: HttpErrorResponse) => {
          console.log(err);
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
  Reset(){
    debugger;
    this.customerCreationFormGroup.reset()
  }
}


