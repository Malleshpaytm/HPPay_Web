import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
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
  secondFormGroup!: FormGroup;
  thirdFormGroup!:FormGroup;
fourthFormGroup!:FormGroup;
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
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl3: ['', Validators.required]
      });

      this.thirdFormGroup = this._formBuilder.group({
        secondCtrl2: ['', Validators.required]
      });
      this.fourthFormGroup = this._formBuilder.group({
        secondCtrl1: ['', Validators.required]
      });


      this.ManageOfficers();
      this.getDropdownValues();
    }
  
   
    ShowTableList(){
       this.isshow=1;
    }
    Reset(){
      this.isshow=0;
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

}
