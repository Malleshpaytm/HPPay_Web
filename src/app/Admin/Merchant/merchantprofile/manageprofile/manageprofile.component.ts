import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';

@Component({
  selector: 'app-manageprofile',
  templateUrl: './manageprofile.component.html',
  styleUrls: ['./manageprofile.component.css']
})
export class ManageprofileComponent implements OnInit {
  basicInformationFormGroup: FormGroup;
  contactDetailsFormGroup: FormGroup;
  terminalDetailsFormGroup: FormGroup;
  ViewProfileGroup: FormGroup;
  merchantTypes: Array<any>;

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow: number = 0;
  isdetail: number = 0;
  isfield: number = 1;
  isbasic: number = 0;
  iscontact: number = 0;
  ispayment: number = 0;
  isterminal: number = 0;
  issummary: number = 0;
  cityDropdownValues: Array<any>;
  statesDropdownValues: Array<any>;
  districtDropdownValues: Array<any>;
  zonalOffices: Array<any>;
  regionalOffices: Array<any>;
  salesAreaDropdownValues: Array<any>;
  showHighwayNo: boolean = true;
  showHighwayName: boolean = true;
  terminalTypeRadioButtonValue = 'GPRS Installation';
  public regexGstNo = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  regexPanNo = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/;
  searchMerchantId: number;
  merchantSearchData: any;
  merchantid = '';
  isReject: boolean = false;
  constructor(@Inject(DOCUMENT) private _document: Document, private router: Router,
    private modalService: NgbModal, private fb: FormBuilder, private adminService: AdminService,
    private toastr: ToastrService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();

    this.route.queryParams
      .subscribe(params => {
        debugger;
        this.merchantid = params.merchantid;
        this.isReject = params.isReject;

      })
    if (this.isReject) {
      this.AddMerchant();
      debugger;
      this.onSearchMechantClick(this.merchantid)
    }
    this.getDropdownValues();
  }
  createForm() {
    this.ViewProfileGroup = this.fb.group({
      merchantId: [''],
    })
    this.basicInformationFormGroup = this.fb.group({
      retailOutletName: ['', Validators.required],
      merchantType: ['', Validators.required],
      dealerName: [''], dealerMobile: [''],
      outletCategory: ['', Validators.required],
      HighwayNoSelect: [''],
      HighwayNoName: [''],
      HighwayName: [''],
      cautionAmountDTP: ['', Validators.required],
      cautionAmountHP: ['', Validators.required],
      monthlyHSDSale: ['', Validators.required],
      sbuType: ['', Validators.required],
      panNumber: ['', Validators.compose([Validators.required, Validators.pattern(this.regexPanNo)])],
      gstNumber: ['', Validators.compose([Validators.required, Validators.pattern(this.regexGstNo)])],


      zonalOffice: ['', Validators.required],
      salesArea: ['', Validators.required],
      regionalOffice: ['', Validators.required],
      erpCode: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],

    });
    this.contactDetailsFormGroup = this.fb.group({
      checkboxRetails:[''],
      permAddress1: ['', Validators.required],
      permAddress2: ['', Validators.required],
      permAddress3: [''],
      permLocation: [''],
      permCity: ['', Validators.required],
      permState: ['', Validators.required],
      permPincode: ['', Validators.required],
      permFax: [''],
      permDistrict: ['', Validators.required],
      Perm_std_code: [''],
      permPhoneOffice: [''],

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
      Comm_Fax: [''],
    });
    this.terminalDetailsFormGroup = this.fb.group({
      NoofLiveTerminals: ['', Validators.required],
      //Terminal_Type: ['', Validators.required],
    });
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
  onAddMerchantClick() {
    debugger;
    //this.findInvalidControls()
    if (this.basicInformationFormGroup.valid && this.contactDetailsFormGroup.valid && this.terminalDetailsFormGroup.valid && this.terminalTypeRadioButtonValue) {
      const message = `Are you sure you want to create this merchant?`;

      const dialogData = new ConfirmDialogModel("Confirm Action", message);

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        maxWidth: "400px",
        data: dialogData
      });
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          let createMerchantData = {
            "useragent": "web",
            "userip": "1",
            "userid": "1",
            "OutletName": this.basicInformationFormGroup.controls.retailOutletName.value,
            "Perm_Address1": this.contactDetailsFormGroup.controls.permAddress1.value,
            "Perm_Address2": this.contactDetailsFormGroup.controls.permAddress2.value,
            "Perm_Address3": this.contactDetailsFormGroup.controls.permAddress3.value,
            "Perm_Location": this.contactDetailsFormGroup.controls.permLocation.value,
            "perm_District": this.contactDetailsFormGroup.controls.permDistrict.value,
            "perm_City": this.contactDetailsFormGroup.controls.permCity.value,
            "perm_State": this.contactDetailsFormGroup.controls.permState.value,
            "Perm_PIN_Code": this.contactDetailsFormGroup.controls.permPincode.value,
            "Perm_std_code": this.contactDetailsFormGroup.controls.Perm_std_code.value ? this.contactDetailsFormGroup.controls.Perm_std_code.value : 0,
            "Perm_Ph_Off": this.contactDetailsFormGroup.controls.permPhoneOffice.value,
            "Perm_fax": this.contactDetailsFormGroup.controls.permFax.value ? this.contactDetailsFormGroup.controls.permFax.value : 0,
            "ERP_Code": this.basicInformationFormGroup.controls.erpCode.value,
            "Outlet_Category": this.basicInformationFormGroup.controls.outletCategory.value,
            "PANNo": this.basicInformationFormGroup.controls.panNumber.value,
            "GSTNo": this.basicInformationFormGroup.controls.gstNumber.value,
            "Dealer_name": this.basicInformationFormGroup.controls.dealerName.value,
            "Highway_Name": this.basicInformationFormGroup.controls.HighwayName.value,
            "Highway_No": this.basicInformationFormGroup.controls.HighwayNoSelect.value + ' ' + this.basicInformationFormGroup.controls.HighwayNoName.value,
            "CautionAmt_DTP": this.basicInformationFormGroup.controls.cautionAmountDTP.value,
            "CautionAmt_HP": this.basicInformationFormGroup.controls.cautionAmountHP.value,
            "LPGSale": "0",
            "MSSale": "0",
            "SBU_TYpe": this.basicInformationFormGroup.controls.sbuType.value,
            "MonthlyHSD": this.basicInformationFormGroup.controls.monthlyHSDSale.value,
            "Zonal_Office": this.basicInformationFormGroup.controls.zonalOffice.value,
            "Regional_Office": this.basicInformationFormGroup.controls.regionalOffice.value,
            "SalesArea": this.basicInformationFormGroup.controls.salesArea.value,
            "Comm_Address1": this.contactDetailsFormGroup.controls.Comm_Address1.value,
            "Comm_Address2": this.contactDetailsFormGroup.controls.Comm_Address2.value,
            "Comm_Address3": this.contactDetailsFormGroup.controls.Comm_Address3.value,
            "Comm_Location": this.contactDetailsFormGroup.controls.Comm_Location.value,
            "comm_City": this.contactDetailsFormGroup.controls.comm_City.value,
            "comm_State": this.contactDetailsFormGroup.controls.comm_State.value,
            "comm_District": this.contactDetailsFormGroup.controls.comm_District.value,
            "Comm_PIN_Code": this.contactDetailsFormGroup.controls.Comm_PIN_Code.value,
            "Comm_std_code": this.contactDetailsFormGroup.controls.Comm_std_code.value,
            "Comm_Ph_Off": this.contactDetailsFormGroup.controls.Comm_Ph_Off.value,
            "Comm_Fax": this.contactDetailsFormGroup.controls.Comm_Fax.value,
            "NoofLiveTerminals": this.terminalDetailsFormGroup.controls.NoofLiveTerminals.value,
            "Terminal_Type": this.terminalTypeRadioButtonValue,
            "CreatedBy": "13",
            "Merchant_Type_Id": this.basicInformationFormGroup.controls.merchantType.value,
            "comm_mobile": "0",
            "Comm_Email": "0",
            "Name": this.basicInformationFormGroup.controls.firstName.value + ' ' + this.basicInformationFormGroup.controls.lastName.value,
            "email": this.basicInformationFormGroup.controls.email.value,
            "Mobile": this.basicInformationFormGroup.controls.mobile.value,
            "groupid": "1",
            "groupname": "HPCL",
            "store_password": "12345678",
            "dealer_Mobile": this.basicInformationFormGroup.controls.dealerMobile.value,

          }
          this.adminService.createMerchant(createMerchantData)
            .subscribe(data => {
              debugger;
              if (data.message.toUpperCase() === 'RECORD FOUND') {
                debugger;
                this.openDialog(`Merchant Id (${data.data[0].merchant_Id}) created successfully`);


              }
              else if (data.status_Code === 401) {
                this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
                this.router.navigate(['/'])
              }
              else {
                this.toastr.error(data.data[0].reason)
              }
            }, (err: HttpErrorResponse) => {
              console.log(err)
            })
        }
      })
    }
    else {
      this.toastr.error("Invalid Form!")
      //let sinvalid=invalid.toString()
      //this.toastr.error(`Please fill the form properly! ${sinvalid}`)
    }
  }

  onSearchMechantClick(merchantid) {
    debugger;
    let getMerchantData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "merchantid": merchantid,
    }
    this.adminService.searchMerchantByMerchantId(getMerchantData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.AddMerchant();
          this.getDropdownValues();
          
          this.merchantSearchData = data.data[0];
          this.basicInformationFormGroup.controls.retailOutletName.setValue(data.data[0].outletName);
          this.basicInformationFormGroup.controls.dealerName.setValue(data.data[0].dealer_name);
          this.basicInformationFormGroup.controls.dealerMobile.setValue(data.data[0].dealer_Mobile);
          
          this.basicInformationFormGroup.controls.outletCategory.setValue(data.data[0].outlet_Category);
          this.onSelectOutletCategory(data.data[0].outlet_Category);
          this.basicInformationFormGroup.controls.HighwayNoName.setValue(data.data[0].highway_No);
          this.basicInformationFormGroup.controls.HighwayName.setValue(data.data[0].highway_Name);
          this.basicInformationFormGroup.controls.cautionAmountDTP.setValue(data.data[0].cautionAmt_dtp);
          this.basicInformationFormGroup.controls.cautionAmountHP.setValue(data.data[0].cautionAmt_hp);
          this.basicInformationFormGroup.controls.monthlyHSDSale.setValue(data.data[0].monthlyHSD);
          this.basicInformationFormGroup.controls.sbuType.setValue(data.data[0].sbU_TYpe);
          this.basicInformationFormGroup.controls.panNumber.setValue(data.data[0].panNo);
          this.basicInformationFormGroup.controls.gstNumber.setValue(data.data[0].gstNo),
            this.basicInformationFormGroup.controls.erpCode.setValue(data.data[0].erP_Code),
            this.basicInformationFormGroup.controls.mobile.setValue(data.data[0].mobile),
            this.basicInformationFormGroup.controls.email.setValue(data.data[0].email),
            //this.basicInformationFormGroup.controls.erpCode.setValue(data.data[0].erP_Code),
            this.searchMerchantId = this.merchantSearchData.merchantid;
          this.contactDetailsFormGroup.controls.permAddress1.setValue(this.merchantSearchData.perm_Address1),
            this.contactDetailsFormGroup.controls.permAddress2.setValue(this.merchantSearchData.perm_Address2),
            this.contactDetailsFormGroup.controls.permAddress3.setValue(this.merchantSearchData.perm_Address3),

            //this.basicInformationFormGroup.controls.merchantType.setValue(this.merchantTypes[0].merchant_Type_Name)
            // this.merchantTypes.forEach(ele=>{
            //   if(ele.merchant_Type_Name===this.merchantSearchData.merchant_Type_Id){
            //     this.basicInformationFormGroup.controls.merchantType.setValue(ele.merchant_Type_Name)
            //   }
            // })
            this.contactDetailsFormGroup.controls.Comm_Address1.setValue(this.merchantSearchData.comm_Address1),
            this.contactDetailsFormGroup.controls.Comm_Address2.setValue(this.merchantSearchData.comm_Address2),
            this.contactDetailsFormGroup.controls.Comm_Address3.setValue(this.merchantSearchData.comm_Address3),
            this.contactDetailsFormGroup.controls.comm_City.setValue(this.merchantSearchData.comm_City),
            this.contactDetailsFormGroup.controls.comm_District.setValue(this.merchantSearchData.comm_District),
            //this.contactDetailsFormGroup.controls.commEmail.setValue(this.merchantSearchData.comm_Email),
            this.contactDetailsFormGroup.controls.Comm_Fax.setValue(this.merchantSearchData.comm_Fax),
            this.contactDetailsFormGroup.controls.Comm_Location.setValue(this.merchantSearchData.comm_Location),
            // this.contactDetailsFormGroup.controls.commMobile.setValue(this.merchantSearchData.comm_Mobile),
            this.contactDetailsFormGroup.controls.Comm_PIN_Code.setValue(this.merchantSearchData.comm_PIN_Code),
            this.contactDetailsFormGroup.controls.comm_State.setValue(this.merchantSearchData.comm_State),
            this.contactDetailsFormGroup.controls.Comm_Ph_Off.setValue(this.merchantSearchData.comm_Ph_Off)
          // this.basicInformationFormGroup.controls.cautionAmt_HP.setValue(this.merchantSearchData.cautionAmt_HP),
          // this.basicInformationFormGroup.controls.cautionAmt_DTP.setValue(this.merchantSearchData.cautionAmt_DTP),


        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
          this._document.defaultView.location.reload();
        }
        else {
          this.toastr.error(data.message)
        }
      }, (err: HttpErrorResponse) => {
        console.log(err)
      })
  }
  radioButtonChecked(event) {
    debugger;
    this.terminalTypeRadioButtonValue = event;
    //this.terminalDetailsFormGroup.controls.Terminal_Type.setValue(event);

  }
  onSelectOutletCategory(event) {
    debugger;
    if (event.toUpperCase() === 'OTHERS' ||
      event.toUpperCase() === 'URBAN' ||
      event.toUpperCase() === 'RURAL') {

      this.showHighwayNo = false;
      this.showHighwayName = false;
      this.basicInformationFormGroup.controls.HighwayNoSelect.clearValidators();
      this.basicInformationFormGroup.controls.HighwayNoName.clearValidators();
      this.basicInformationFormGroup.controls.HighwayNoSelect.setValue('');
      this.basicInformationFormGroup.controls.HighwayNoName.setValue('');
      this.basicInformationFormGroup.controls.HighwayName.setValue('');
    }

    else {
      this.showHighwayNo = true;
      this.showHighwayName = true;
      this.basicInformationFormGroup.controls.HighwayNoSelect.setValidators([Validators.required]);
      this.basicInformationFormGroup.controls.HighwayNoName.setValidators([Validators.required]);
    }

  }
  getDropdownValues() {
    debugger;
    //merchant type
    let merchantTypeData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.getMerchantType(merchantTypeData)
      .subscribe(data => {
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          debugger;
          this.merchantTypes = data.data;
          if (this.isReject) {
            this.merchantTypes.forEach(ele => {
              if (ele.merchant_Type_Name === this.merchantSearchData?.merchant_Type_Id) {
                this.basicInformationFormGroup.controls.merchantType.setValue(ele.merchant_Type_Id)
              }
            })
          }
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      }, (err: HttpErrorResponse) => {
        console.log(err)
      })
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
          this.statesDropdownValues.sort((a, b) => a.state_Name.localeCompare(b.state_Name))
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
    // let districtData = {
    //   "Useragent": "web",
    //   "Userip": "1",
    //   "Userid": "1"
    // }
    // this.adminService.getDistrict(districtData)
    //   .subscribe(data => {
    //     if (data.message.toUpperCase() === 'RECORD FOUND') {
    //       debugger;
    //       this.districtDropdownValues = data.data;
    //     }
    //     else if (data.status_Code === 401) {
    //       this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
    //       this.router.navigate(['/'])
    //     }
    //   },
    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //     }
    //   );
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
          if (this.isReject) {
            this.zonalOffices.filter(ele => {
              if (ele.zone_Name === this.merchantSearchData?.zonal_Office) {
                this.basicInformationFormGroup.controls.zonalOffice.setValue(ele.zone_Code)
              }
            })
          }
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
          if (this.isReject) {
            this.regionalOffices.filter(ele => {
              if (ele.rO_Name === this.merchantSearchData?.regional_Office) {
                this.basicInformationFormGroup.controls.regionalOffice.setValue(ele.rO_Code)
              }
            })
          }
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
          if (this.isReject) {
            this.salesAreaDropdownValues.forEach(ele => {
              if (ele.district_Code == this.merchantSearchData?.salesArea) {
                this.basicInformationFormGroup.controls.salesArea.setValue(ele.district_Code)
              }
            })
          }
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
      this.contactDetailsFormGroup.controls.Comm_Fax.setValue(this.contactDetailsFormGroup.controls.permFax.value);
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
      this.contactDetailsFormGroup.controls.Comm_Fax.disable();
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
      this.contactDetailsFormGroup.controls.Comm_Fax.setValue('');
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
      this.contactDetailsFormGroup.controls.Comm_Fax.enable();
      // this.contactDetailsFormGroup.controls.commFaxSecond.enable();
      // this.contactDetailsFormGroup.controls.commEmail.enable();
    }
  }
  else{
    this.contactDetailsFormGroup.controls.checkboxRetails.disable();
    this.toastr.error("Please select all the retail outlet details!");
    this.contactDetailsFormGroup.controls.checkboxRetails.enable();
  }
  }
  viewprofile() {
    this.iscontact = 0;
    this.isbasic = 0;
    this.ispayment = 0;
    this.issummary = 0;
    this.isterminal = 0
    this.isfield = 1;
    this.isdetail = 0;

  }
  AddMerchant() {

    this.isdetail = 1;
    this.isfield = 0;
    this.isshow = 0;
    this.isbasic = 1;


  }
  showcontact() {
    debugger;
   if (this.basicInformationFormGroup.valid) {
      this.iscontact = 1;
      this.isbasic = 0;
      this.ispayment = 0;
      this.issummary = 0;
      this.isterminal = 0
    }
    else {
      this.toastr.error("Invalid Form!")
      //    //this.findInvalidControls();
    }
  }
  basicinfor() {
    this.isbasic = 1;
    this.iscontact = 0;
    this.ispayment = 0;
    this.issummary = 0;
    this.isterminal = 0

  }
  showpayment() {
    this.ispayment = 1;
    this.isbasic = 0;
    this.iscontact = 0;
    this.issummary = 0;
    this.isterminal = 0
  }
  showterminal() {
    if (this.basicInformationFormGroup.valid && this.contactDetailsFormGroup.valid) {
      this.isterminal = 1;
      this.ispayment = 0;
      this.isbasic = 0;
      this.iscontact = 0;
      this.issummary = 0;
    }
    else {
      debugger;
      this.toastr.error("Invalid Form!")
      this.findInvalidControls(this.contactDetailsFormGroup);
    }
  }
  showsummary() {
    this.issummary = 1;
    this.isterminal = 0;
    this.ispayment = 0;
    this.isbasic = 0;
    this.iscontact = 0;
  }

  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.isshow = 0;
  }

  limitChange(limit: number) {

  }
  toggleCheckAll() {
    this.setList(this.allChecked);
  }
  setList(checkAll: boolean) {
    // this.DataList.forEach((c: DatatoList) => {
    //   c.isChecked = checkAll;
    //});
  }
  setAllChecked() {
    //return this.fgSystemList.filter((c: FgSystemToList) => c.isChecked === true).length === this.fgSystemList.length;
  }
  public findInvalidControls(formName) {
    debugger;
    const invalid = [];
    const controls = formName.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);

      }
    }
    let ss = invalid.toString()
    this.toastr.error(ss)
    console.log(ss)
    return invalid;
  }
  openDialog(message): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._document.defaultView.location.reload();
      //this.animal = result;
    });
  }
}
