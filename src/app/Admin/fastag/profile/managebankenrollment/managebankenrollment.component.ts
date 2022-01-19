import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
@Component({
  selector: 'app-managebankenrollment',
  templateUrl: './managebankenrollment.component.html',
  styleUrls: ['./managebankenrollment.component.css']
})
export class ManagebankenrollmentComponent implements OnInit {
  isshow:number=0;
  GetSavedData:any=[];
  isDisplay:number=0;
    page = 1;
    pageSize = 4;
    collectionSize = 5;
    cityDropdownValues: Array<any>;
    statesDropdownValues: Array<any>;
    districtDropdownValues: Array<any>;
    zonalOffices: Array<any>;
    regionalOffices: Array<any>;
    customerTypes:Array<any>;
    customerSubTypes:Array<any>;
    salesAreaDropdownValues: Array<any>;
    businessEntityDropdownValues:Array<any>;
    isLinear = true;
  firstFormGroup!: FormGroup;
  contactDetailsFormGroup!: FormGroup;
  keyOfficialFormGroup!:FormGroup;
fourthFormGroup!:FormGroup;
minDate = new Date(1900, 0, 1);
date = new Date();
minAge = 18;
loggedInUserInfo = localStorage.getItem('userInfo');
loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)
 //maxDate = new Date(this.date.getFullYear() - 18, 0, 1);
 maxDate=new Date(this.date.getFullYear() - this.minAge, this.date.getMonth(), this.date.getDate());
 areaOfOperation = [];
constructor(@Inject(DOCUMENT) private _document: Document,
private router: Router, private adminService: AdminService, 
private toastr: ToastrService, private _formBuilder: FormBuilder,
private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, public dialog: MatDialog, readonly merchantService: MerchantService,) { }

  
    ngOnInit(): void {

      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
        zonalOffice: ['', Validators.required],
        salesArea: ['', Validators.required],
        regionalOffice: ['', Validators.required],
        customerType:['', Validators.required],
        customerSubType:['', Validators.required],
        individualName:['',Validators.required],
        nameOnCard:['',Validators.required],
        typeOfBusinessEntity:['',Validators.required],
        residenceStatus:['',Validators.required],
        panNumber:['', Validators.required]

      });
      this.contactDetailsFormGroup = this._formBuilder.group({
        secondCtrl3: ['', Validators.required],
        checkboxRetails:[''],
        permAddress1: ['', Validators.required],
        permAddress2: ['', Validators.required],
        permAddress3: [''],
        permLocation: [''],
        permCity: ['', Validators.required],
        permState: ['', Validators.required],
        permPincode: ['', Validators.required],
        permFax1: [''],permFax2: [''],
        permDistrict: ['', Validators.required],
        Perm_std_code: [''],
        permPhoneOffice: [''],
        mobile:['', Validators.required],
        email:['', Validators.email],
  
        Comm_Address1: [''],
        Comm_Address2: [''],
        Comm_Address3: [''],
        Comm_Location: [''],
        comm_City: [''],
        comm_State: [''],
        comm_District: [''],
        Comm_PIN_Code: [''],
        Comm_std_code: [''],
        Comm_Ph_Off: [''],
        Comm_Fax1: [''],  Comm_Fax2: [''],
      });

      this.keyOfficialFormGroup = this._formBuilder.group({
        secondCtrl2: ['', Validators.required],
        title: ['', Validators.required],
        individualInitials: [''],
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        keyOfficialsFaxFirst: [''], keyOfficialsFaxSecond:[''],
        designation: ['', Validators.required],
        keyOfficialEmail: ['', Validators.email],
        keyOfficialphoneNumber: [''],keyOfficialStdCode:[''],
        dateOfAnniversary: [''],
        Area_Of_Operation: [''],
        keyOfficialmobile: ['', Validators.compose([Validators.required, Validators.min(10)])],
        dateOfBirth: [''],
        secretQuestions: [''],
        secretAnswers: [''],
        hcv: [''], lcv: [''], muv: [''], car: [''], typeOfFleet: [''],
        cardAppliedFor: [''], monthlySpendsOnVehicles: [''],
        monthlySpendsOnVehiclesSecondInput: [''],
      });
      this.fourthFormGroup = this._formBuilder.group({
        secondCtrl1: ['', Validators.required]
      });


      this.ManageOfficers();
      this.getDropdownValues();
      this.getcustomerSubType(959);
      this.firstFormGroup.controls.customerType.setValue('959');
      this.firstFormGroup.controls.customerType.disable();
      this.firstFormGroup.controls.customerSubType.setValue(960);
      //this.firstFormGroup.controls.customerSubType.disable();
    }
    toggle($event) {
      if ($event.source.value === 'Inter State') {
        this.areaOfOperation.push($event.source.value);
      }
      else if ($event.source.value === 'Inter City') {
        this.areaOfOperation.push($event.source.value);
      }
      else if ($event.source.value === 'Intra State') {
        this.areaOfOperation.push($event.source.value);
      }
      this.areaOfOperation.splice(3, 1)
      this.areaOfOperation;
    }
   
    ShowTableList(){
       this.isshow=1;
    }
    Reset(){
      this.isshow=0;
    }

    onSelectState(state_code) {
      this.getDistrictByState(state_code)
    }
    getDistrictByState(state_code) {
      let getDistrictByStateData = {
        "state_Code": state_code,
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
    onPermanentCommunicationAddressCheckboxChecked(event) {
      debugger;
      
      if(this.contactDetailsFormGroup.controls.permAddress1.value && this.contactDetailsFormGroup.controls.permAddress2.value
        && this.contactDetailsFormGroup.controls.permCity.value && this.contactDetailsFormGroup.controls.permPincode.value 
        && this.contactDetailsFormGroup.controls.permState.value && 
        this.contactDetailsFormGroup.controls.permDistrict.value ){
         this.contactDetailsFormGroup.controls.checkboxRetails.enable();
      if ((this.contactDetailsFormGroup.controls.permAddress1.value != '' || this.contactDetailsFormGroup.controls.permAddress2.value != '' ||
        this.contactDetailsFormGroup.controls.permAddress3.value != '' || this.contactDetailsFormGroup.controls.permLocation.value != '' ||
        this.contactDetailsFormGroup.controls.permCity.value != '' || this.contactDetailsFormGroup.controls.permPincode.value != '' ||
        this.contactDetailsFormGroup.controls.permState.value != '' || this.contactDetailsFormGroup.controls.permDistrict.value != '' ||
        this.contactDetailsFormGroup.controls.permPhoneOffice.value != '' ||
        this.contactDetailsFormGroup.controls.Perm_std_code.value != '' || this.contactDetailsFormGroup.controls.permFax.value !='' 
        //||
        //this.contactDetailsFormGroup.controls.retailOutletFaxSecond.value != '' || 
       // this.contactDetailsFormGroup.controls.retailOutletEmail.value
        )
        && event.target.checked) {     
        this.contactDetailsFormGroup.controls.Comm_Address1.setValue(this.contactDetailsFormGroup.controls.permAddress1.value);
        this.contactDetailsFormGroup.controls.Comm_Address2.setValue(this.contactDetailsFormGroup.controls.permAddress2.value);
        this.contactDetailsFormGroup.controls.Comm_Address3.setValue(this.contactDetailsFormGroup.controls.permAddress3.value);
        this.contactDetailsFormGroup.controls.Comm_Location.setValue(this.contactDetailsFormGroup.controls.permLocation.value);
        this.contactDetailsFormGroup.controls.comm_City.setValue(this.contactDetailsFormGroup.controls.permCity.value);
        this.contactDetailsFormGroup.controls.Comm_PIN_Code.setValue(this.contactDetailsFormGroup.controls.permPincode.value);
        this.contactDetailsFormGroup.controls.comm_State.setValue(this.contactDetailsFormGroup.controls.permState.value);
        this.contactDetailsFormGroup.controls.comm_District.setValue(this.contactDetailsFormGroup.controls.permDistrict.value);
        this.contactDetailsFormGroup.controls.Comm_Ph_Off.setValue(this.contactDetailsFormGroup.controls.permPhoneOffice.value);
        //this.contactDetailsFormGroup.controls.commMobile.setValue(this.contactDetailsFormGroup.controls.retailOutletMobile.value);
        this.contactDetailsFormGroup.controls.Comm_std_code.setValue(this.contactDetailsFormGroup.controls.Perm_std_code.value);
        this.contactDetailsFormGroup.controls.Comm_Fax1.setValue(this.contactDetailsFormGroup.controls.permFax1.value);
        this.contactDetailsFormGroup.controls.Comm_Fax2.setValue(this.contactDetailsFormGroup.controls.permFax2.value);
        //this.contactDetailsFormGroup.controls.commFaxSecond.setValue(this.contactDetailsFormGroup.controls.retailOutletFaxSecond.value);
        //this.contactDetailsFormGroup.controls.commEmail.setValue(this.contactDetailsFormGroup.controls.retailOutletEmail.value)
        // to disable the fields after setting values
        this.contactDetailsFormGroup.controls.Comm_Address1.disable();
        this.contactDetailsFormGroup.controls.Comm_Address2.disable();
        this.contactDetailsFormGroup.controls.Comm_Address3.disable();
        this.contactDetailsFormGroup.controls.Comm_Location.disable();
        this.contactDetailsFormGroup.controls.comm_City.disable();
        this.contactDetailsFormGroup.controls.Comm_PIN_Code.disable();
        this.contactDetailsFormGroup.controls.comm_State.disable();
        this.contactDetailsFormGroup.controls.comm_District.disable();
        this.contactDetailsFormGroup.controls.Comm_Ph_Off.disable();
        //this.contactDetailsFormGroup.controls.commMobile.disable();
        this.contactDetailsFormGroup.controls.Comm_std_code.disable();
        this.contactDetailsFormGroup.controls.Comm_Fax1.disable();
        this.contactDetailsFormGroup.controls.Comm_Fax2.disable();
        // this.contactDetailsFormGroup.controls.commFaxSecond.disable();
        // this.contactDetailsFormGroup.controls.commEmail.disable();
      }
      else if (!event.target.checked) {
        this.contactDetailsFormGroup.controls.Comm_Address1.setValue('');
        this.contactDetailsFormGroup.controls.Comm_Address2.setValue('');
        this.contactDetailsFormGroup.controls.Comm_Address3.setValue('');
        this.contactDetailsFormGroup.controls.Comm_Location.setValue('');
        this.contactDetailsFormGroup.controls.comm_City.setValue('');
        this.contactDetailsFormGroup.controls.Comm_PIN_Code.setValue('');
        this.contactDetailsFormGroup.controls.comm_State.setValue('');
        this.contactDetailsFormGroup.controls.comm_District.setValue('');
        this.contactDetailsFormGroup.controls.Comm_Ph_Off.setValue('');
        //this.contactDetailsFormGroup.controls.commMobile.setValue('');
        this.contactDetailsFormGroup.controls.Comm_std_code.setValue('');
        this.contactDetailsFormGroup.controls.Comm_Fax1.setValue('');
        this.contactDetailsFormGroup.controls.Comm_Fax2.setValue('');
        // this.contactDetailsFormGroup.controls.commFaxSecond.setValue('');
        // this.contactDetailsFormGroup.controls.commEmail.setValue('');
  
        this.contactDetailsFormGroup.controls.Comm_Address1.enable();
        this.contactDetailsFormGroup.controls.Comm_Address2.enable();
        this.contactDetailsFormGroup.controls.Comm_Address1.enable();
        this.contactDetailsFormGroup.controls.Comm_Location.enable();
        this.contactDetailsFormGroup.controls.comm_City.enable();
        this.contactDetailsFormGroup.controls.Comm_PIN_Code.enable();
        this.contactDetailsFormGroup.controls.comm_State.enable();
        this.contactDetailsFormGroup.controls.comm_District.enable();
        this.contactDetailsFormGroup.controls.Comm_Ph_Off.enable();
        //this.contactDetailsFormGroup.controls.commMobile.enable();
        this.contactDetailsFormGroup.controls.Comm_std_code.enable();
        this.contactDetailsFormGroup.controls.Comm_Fax1.enable();
        this.contactDetailsFormGroup.controls.Comm_Fax2.enable();
        // this.contactDetailsFormGroup.controls.commFaxSecond.enable();
        // this.contactDetailsFormGroup.controls.commEmail.enable();
      }
    }
    else{
      this.contactDetailsFormGroup.controls.checkboxRetails.disable();
      this.toastr.error("Please fill all the required retail outlet details!");
      this.contactDetailsFormGroup.controls.checkboxRetails.enable();
    }
    }
    ManageOfficers() {
      this.GetSavedData = [
        {
          "slno":1,
          "zo": "Test",
          "ro": "VFIRBI",
          "state": "Odisha",
          "dist": "Jsg",
          "markettingofficername": "suman",
  
          "markettingofficeremail": "suman@gmail.com",
          "zonalofficername": "suman",
          "zonalofficeremail": "suman@gmail.com"
  
  
        },
        {
          "slno":2,
          "zo": "Test",
          "ro": "VFIRBI",
          "state": "Odisha",
          "dist": "Jsg",
          "markettingofficername": "suman",
  
          "markettingofficeremail": "suman@gmail.com",
          "zonalofficername": "suman",
          "zonalofficeremail": "suman@gmail.com"
  
        },
        {
          "slno":3,
          "zo": "Test",
          "ro": "VFIRBI",
          "state": "Odisha",
          "dist": "Jsg",
          "markettingofficername": "suman",
  
          "markettingofficeremail": "suman@gmail.com",
          "zonalofficername": "suman",
          "zonalofficeremail": "suman@gmail.com"
  
        }
      ];
    }
    getDropdownValues() {
      debugger;
      let get_any_entity_type_list={
        "useragent": "web",
        "userip": "1",
        "userid": "1",
        "entitytypegroup": "Customer Type"
      }
      this.merchantService.get_any_entity_type_list(get_any_entity_type_list)
        .subscribe(data => {
         if(data.message.toUpperCase()==="RECORD FOUND"){
          this.customerTypes=data.data;
         }
        
         
        },
        
        (err: HttpErrorResponse) => {
         // this.toastr.error(err.toString());
        });
        let businessEntityData = {
          "Useragent": "web",
          "Userip": "1",
          "Userid": "1"
        }
        this.adminService.getBusinessEntities(businessEntityData)
          .subscribe(data => {
            debugger;
            this.businessEntityDropdownValues = data.data;
          });
        let customerSubTypesData={
          "useragent": "web",
          "userip": "1",
          "userid": "1",
          "entitytypegroup": "Lube Purchase Status"
        }
        this.merchantService.get_any_entity_type_list(customerSubTypesData)
          .subscribe(data => {
           if(data.message.toUpperCase()==="RECORD FOUND"){
            this.customerSubTypes=data.data;
           }
          
           
          },
          
          (err: HttpErrorResponse) => {
           // this.toastr.error(err.toString());
          });
      //city
      let cityData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getCity(cityData)
        .subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            debugger;
            this.cityDropdownValues = data.data;
           
          }
          else if (data.status_Code === 401) {
            this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
            this.router.navigate(['/'])
          }
        },
  
          (err: HttpErrorResponse) => {
            console.log(err);
          });
  
      //state
      let stateData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getStates(stateData)
        .subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            debugger;
            this.statesDropdownValues = data.data;
            this.statesDropdownValues.sort((a, b) => a.state_Name.localeCompare(b.state_Name));
           
          }
          else if (data.status_Code === 401) {
            this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
            this.router.navigate(['/'])
          }
        },
          (err: HttpErrorResponse) => {
            console.log(err);
          });
      //district
      let districtData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getDistrict(districtData)
        .subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            debugger;
            this.districtDropdownValues = data.data;
          }
          else if (data.status_Code === 401) {
            this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
            this.router.navigate(['/'])
          }
        },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
      //zonal office
      let zonalOfficeData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getZonalOffice(zonalOfficeData)
        .subscribe(data => {
          debugger;
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
      //get regional office data
      let regionalOfficeData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getRegionalOffice(regionalOfficeData)
        .subscribe(data => {
          debugger;
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
      //sales area
      let salesAreaData = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1"
      }
      this.adminService.getSalesArea(salesAreaData)
        .subscribe(data => {
          debugger;
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            this.salesAreaDropdownValues = data.data;
           
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
    ShowDetails(){
this.isDisplay=1;
    }
    onCustomerTypeSelect(customerTypeId) {
      this.getcustomerSubType(customerTypeId);
    }
  
    // get customer sub Type according to customer type id
    getcustomerSubType(customerTypeId) {
      debugger;
      let customerSubType = {
        "Useragent": "web",
        "Userip": "1",
        "Userid": "1",
        "Customer_Type_Id": customerTypeId
      }
      this.adminService.getSubCustomerType(customerSubType)
  
        .subscribe(data => {
          this.customerSubTypes = data.data;
        });
    }
    onCustomerRegistrationPostDataButtonClicked() {
      const message = `Are you sure you want to create the customer?`;
  
      const dialogData = new ConfirmDialogModel("Confirm Action", message);
  
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
  
      dialogRef.afterClosed().subscribe(dialogResult => {
        if(dialogResult)
        {
            if (true) {
            debugger;
           
            let formNumber = new Date();
            let date = formNumber.getDate();
            let year = formNumber.getFullYear();
            let hours = formNumber.getHours();
            let minutes = formNumber.getMinutes();
            let seconds = formNumber.getSeconds()
            const dateOfApplication = new Date()
            dateOfApplication.toISOString().split('T')[0]
      
            const signedOn = new Date()
            signedOn.toISOString().split('T')[0]
            let customerRegistrationData = {
              "Password": "0000",
              "Secret_Question": this.keyOfficialFormGroup.controls.secretQuestions.value,
              "Secret_Answer": this.keyOfficialFormGroup.controls.secretAnswers.value,
              "Group_Id": "0",
              "Group_Name": "",
              "Zonal_Office": this.firstFormGroup.controls.zonalOffice.value,
              "Regional_Office": this.firstFormGroup.controls.regionalOffice.value,
              "Customer_Type_Id": this.firstFormGroup.controls.customerType.value,
              "Customer_SubType_Id": this.firstFormGroup.controls.customerSubType.value,
              "SalesArea": this.firstFormGroup.controls.salesArea.value,
              "Form_Number": date.toString() + year.toString().substr(-2) + hours.toString() + minutes.toString() + seconds.toString(),
              //ddyyhhmmss
              "Application_Date": dateOfApplication,//this.firstFormGroup.controls.dateOfApplication.value.getDate()+'/'+this.firstFormGroup.controls.dateOfApplication.value.getMonth()+'/'+this.firstFormGroup.controls.dateOfApplication.value.getFullYear(),
              "Signed_On": signedOn,
              "Individual_Name": this.firstFormGroup.controls.individualName.value,
              "Org_Name":  this.firstFormGroup.controls.individualName.value,
              "Title": this.keyOfficialFormGroup.controls.title.value,
              "Name_On_Card": this.firstFormGroup.controls.nameOnCard.value,
              "Usage_Type": "",
              "Type_of_Business_Entity": this.firstFormGroup.controls.typeOfBusinessEntity.value,
              "Residence_Status": this.firstFormGroup.controls.residenceStatus.value,
              "Income_Tax_PAN": this.firstFormGroup.controls.panNumber.value,
              "Comm_Address1": this.contactDetailsFormGroup.controls.permAddress1.value,
              "Comm_Address2": this.contactDetailsFormGroup.controls.permAddress2.value,
              "Comm_Address3": this.contactDetailsFormGroup.controls.permAddress3.value,
              "Comm_Location": this.contactDetailsFormGroup.controls.permLocation.value,
              "Comm_City": this.contactDetailsFormGroup.controls.permCity.value,
              "Comm_PIN_Code": this.contactDetailsFormGroup.controls.permPincode.value,
              "Comm_State": this.contactDetailsFormGroup.controls.permState.value,
              "Comm_District": this.contactDetailsFormGroup.controls.permDistrict.value,
              "Comm_Std_Code": this.contactDetailsFormGroup.controls.Perm_std_code.value ? this.contactDetailsFormGroup.controls.Perm_std_code.value : 0,
              "Comm_Ph_Office": this.contactDetailsFormGroup.controls.permPhoneOffice.value?this.contactDetailsFormGroup.controls.permPhoneOffice.value:0,
              "Comm_Mobile": this.contactDetailsFormGroup.controls.mobile.value?this.contactDetailsFormGroup.controls.mobile.value:0,
              "Comm_Email": this.contactDetailsFormGroup.controls.email.value?this.contactDetailsFormGroup.controls.email.value:'',
              //"Perm_fax": this.contactDetailsFormGroup.controls.permFax.value ? this.contactDetailsFormGroup.controls.permFax.value : 0,

              "Comm_Fax": this.contactDetailsFormGroup.controls.permFax1.value+this.contactDetailsFormGroup.controls.permFax2.value ? this.contactDetailsFormGroup.controls.permFax1.value+this.contactDetailsFormGroup.controls.permFax2.value : 0,
              "Perm_Address1": this.contactDetailsFormGroup.controls.Comm_Address1.value,
              "Perm_Address2":this.contactDetailsFormGroup.controls.Comm_Address2.value,
              "Perm_Address3":this.contactDetailsFormGroup.controls.Comm_Address3.value,
              "Perm_Location": this.contactDetailsFormGroup.controls.Comm_Location.value,
              "Perm_City": this.contactDetailsFormGroup.controls.comm_City.value,
              "Perm_PIN_Code": this.contactDetailsFormGroup.controls.Comm_PIN_Code.value,
              "Perm_State":  this.contactDetailsFormGroup.controls.comm_State.value,
              "Perm_District": this.contactDetailsFormGroup.controls.comm_District.value,
              "Perm_Std_Code": this.contactDetailsFormGroup.controls.Comm_std_code.value?this.contactDetailsFormGroup.controls.Comm_std_code.value:0,
              "Perm_Ph_Office": this.contactDetailsFormGroup.controls.Comm_Ph_Off.value?this.contactDetailsFormGroup.controls.Comm_Ph_Off.value:0,
              //"Perm_Fax":this.contactDetailsFormGroup.controls.permFaxFirst.value + this.contactDetailsFormGroup.controls.permFaxSecond.value?this.contactDetailsFormGroup.controls.faxFirst.value + this.contactDetailsFormGroup.controls.faxSecond.value:0,
              "Perm_Fax":this.contactDetailsFormGroup.controls.Comm_Fax1.value + this.contactDetailsFormGroup.controls.Comm_Fax2.value?this.contactDetailsFormGroup.controls.Comm_Fax1.value + this.contactDetailsFormGroup.controls.Comm_Fax2.value:0,
              "Area_Of_Operation": this.areaOfOperation[0],
              "Number_Of_HCV_Owned": this.keyOfficialFormGroup.controls.hcv.value?this.keyOfficialFormGroup.controls.hcv.value:0,
              "Number_Of_HCV_Operated": 0,
              "Number_Of_LCV_Owned": this.keyOfficialFormGroup.controls.lcv.value?this.keyOfficialFormGroup.controls.lcv.value:0,
              "Number_Of_LCV_Operated": 0,
              "Number_Of_MUVSUV_Owned": this.keyOfficialFormGroup.controls.muv.value?this.keyOfficialFormGroup.controls.muv.value:0,
              "Number_Of_MUVSUV_Operated": 0,
              "Number_Of_CarJeep_Owned": this.keyOfficialFormGroup.controls.car.value? this.keyOfficialFormGroup.controls.car.value:0,
              "Number_Of_CarJeep_Operated": 0,
              "Fleet_Size": "0",
              "Type_Of_Fleet": this.keyOfficialFormGroup.controls.typeOfFleet.value,
              "Number_Of_Card_Applied_For": this.keyOfficialFormGroup.controls.cardAppliedFor.value?this.keyOfficialFormGroup.controls.cardAppliedFor.value:0,
              "Approx_Monthly_Spends_On_Fuel": this.keyOfficialFormGroup.controls.monthlySpendsOnVehicles.value?this.keyOfficialFormGroup.controls.monthlySpendsOnVehicles.value:0,
              "Approx_Monthly_Spends_On_Lubes": this.keyOfficialFormGroup.controls.monthlySpendsOnVehiclesSecondInput.value?this.keyOfficialFormGroup.controls.monthlySpendsOnVehiclesSecondInput.value:0,
              "DMA_Code": "0",
              "DME_Code": "0",
              "Promo": "0",
              "Received_Money": "0",
              "Number_Of_Vehicles": "0",
              "Payment_Mode": "0",
              "Key_Official_Title": this.keyOfficialFormGroup.controls.title.value,
              "Individual_Initials": this.keyOfficialFormGroup.controls.individualInitials.value,
              "First_Name": this.keyOfficialFormGroup.controls.firstName.value,
              "Middle_Name": this.keyOfficialFormGroup.controls.middleName.value,
              "Last_Name": this.keyOfficialFormGroup.controls.lastName.value,
              "Fax": this.keyOfficialFormGroup.controls.keyOfficialsFaxFirst.value + this.keyOfficialFormGroup.controls.keyOfficialsFaxSecond.value?this.keyOfficialFormGroup.controls.keyOfficialsFaxFirst.value + this.keyOfficialFormGroup.controls.keyOfficialsFaxSecond.value:0,
              "Designation": this.keyOfficialFormGroup.controls.designation.value,
              "Key_Official_Std_Code": this.keyOfficialFormGroup.controls.keyOfficialStdCode.value?this.keyOfficialFormGroup.controls.keyOfficialStdCode.value:0,
              "Ph_Office": this.keyOfficialFormGroup.controls.keyOfficialphoneNumber.value?this.keyOfficialFormGroup.controls.keyOfficialphoneNumber.value:0,
              "Date_Of_Anniversary": this.keyOfficialFormGroup.controls.dateOfAnniversary.value?this.keyOfficialFormGroup.controls.dateOfAnniversary.value:"1900-01-01",
              "Application_ReceivedOn_Date": dateOfApplication,
              "Mobile": this.keyOfficialFormGroup.controls.keyOfficialmobile.value,
              "Date_Of_Birth": this.keyOfficialFormGroup.controls.dateOfBirth.value?this.keyOfficialFormGroup.controls.dateOfBirth.value:"1900-01-01",
              //this.keyOfficialFormGroup.controls.dateOfBirth.value,
              "Bank_Name": "",
              "Branch_Name": "",
              "Branch_Code": "0",
              "IFSC": "",
              "Bank_Account_No": "0",
              "Control_Card_No": "0",
              "Control_Card_Pin": "0",
              "Employee_No": "0",
              "Employee_Name": "",
              "Owner_Name": "0",
              "Cheque_DD_No": "",
              "Cheque_DD_Date": '1900-01-01',
              "Cheque_Bank": "0",
              "FSE_Name": "0",
              "CreatedBy": this.loggedInUserInfoArr.userid,
              "Useragent": "web",
              "Userip": "1",
              "Userid": "1",
        
              
            
      
            }
      
            try {
              this.adminService.bankCustomerRegistration(customerRegistrationData)
                .subscribe(data => {
                
                  debugger;
                  if (data.success === true) {
                    this.openDialog( `Customer added successfully with customer id ${data.data.user_Refferal_Code} and Customer Ref. No ${data.data.unique_No}!`)
                   
                
                    dialogRef.afterClosed().subscribe(result => {
                      this.router.navigate(['admin/fastag/managebankenrolment'])
                    });             
                  }
                  else if (data.status_Code === 401) {
                    this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
                    this.router.navigate(['/'])
                    
                  }
                  else {
                    this.toastr.error(data.message)
                  }
      
                },
                  (err: HttpErrorResponse) => {
                    console.log(err)
      
                  }
                );
            }
            catch (e) {
              console.log(e)
            }
      
          }
          else {
            //this.toastr.error("Please enter correct Vehicle Details!")
          }
        }
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


