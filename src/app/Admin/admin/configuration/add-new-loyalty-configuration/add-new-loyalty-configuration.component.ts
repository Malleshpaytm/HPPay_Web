import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantService } from 'src/app/services/merchant/merchant.service';

@Component({
  selector: 'app-add-new-loyalty-configuration',
  templateUrl: './add-new-loyalty-configuration.component.html',
  styleUrls: ['./add-new-loyalty-configuration.component.css']
})
export class AddNewLoyaltyConfigurationComponent implements OnInit {
  get_any_entity_type_list=[];
  get_any_transaction_type_list=[];
  isEdit: boolean=false;
  loyaltyInfo: any;
  AddNewLoyaltyConfigurationFormgroup:FormGroup;
  constructor(readonly merchantService:MerchantService,
    private adminService: AdminService, public dialog: MatDialog,private fb:FormBuilder,
    public toastr:ToastrService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.AddNewLoyaltyConfigurationFormgroup=this.fb.group({
      slabname:[''],
      slabminvalue:[''],
      slabmaxvalue: [''],
      slabearn_points: [''],
      slabearn_points_as_per_rs:[''],
      customertype:[''],
      transactiontype:[''],
      typeoflogic:['']
    })
    this.getCustomerType();
    this.getTransactionType();
    this.route.queryParams
    .subscribe(params => {
      debugger;
      this.loyaltyInfo = params.data;
      this.isEdit = params.isEdit === "true"
    }
    );
    if (this.isEdit == true) {
      this.loyaltyInfo = JSON.parse(this.loyaltyInfo);
      this.AddNewLoyaltyConfigurationFormgroup.controls.slabname.setValue(this.loyaltyInfo.slabname);
      this.AddNewLoyaltyConfigurationFormgroup.controls.slabminvalue.setValue(this.loyaltyInfo.slabminvalue);
      this.AddNewLoyaltyConfigurationFormgroup.controls.slabmaxvalue.setValue(this.loyaltyInfo.slabmaxvalue);
      this.AddNewLoyaltyConfigurationFormgroup.controls.slabearn_points.setValue(this.loyaltyInfo.slabearn_points);
      this.AddNewLoyaltyConfigurationFormgroup.controls.slabearn_points_as_per_rs.setValue(this.loyaltyInfo.slabearn_points_as_per_rs);
      this.AddNewLoyaltyConfigurationFormgroup.controls.typeoflogic.setValue(this.loyaltyInfo.typeoflogic);
      this.AddNewLoyaltyConfigurationFormgroup.controls.customertype.setValue(this.loyaltyInfo.customertype);
      this.AddNewLoyaltyConfigurationFormgroup.controls.transactiontype.setValue(this.loyaltyInfo.transactiontype);
    }
   
  }
  getCustomerType(){
    let get_any_entity_type_list={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "entitytypegroup": "Customer Type"
    }
    this.merchantService.get_any_entity_type_list(get_any_entity_type_list)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.get_any_entity_type_list=data.data;
       }
      
       
      },
      
      (err: HttpErrorResponse) => {
       // this.toastr.error(err.toString());
      });
  }
  onResetButtonClick(){
    this.AddNewLoyaltyConfigurationFormgroup.reset();
  }
  getTransactionType(){
    let get_any_entity_type_list={
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "entitytypegroup": "TransactionType"
    }
    this.merchantService.get_any_entity_type_list(get_any_entity_type_list)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.get_any_transaction_type_list=data.data;
       }
      
       
      },
      
      (err: HttpErrorResponse) => {
       // this.toastr.error(err.toString());
      });
  }
  onSaveButtonClick(){
    debugger;
    let saveLoyaltyLogicData={
    
      "slabname": this.AddNewLoyaltyConfigurationFormgroup.controls.slabname.value,
      "slabminvalue":this.AddNewLoyaltyConfigurationFormgroup.controls.slabminvalue.value,
      "slabmaxvalue": this.AddNewLoyaltyConfigurationFormgroup.controls.slabmaxvalue.value,
      "slabearn_points": this.AddNewLoyaltyConfigurationFormgroup.controls.slabearn_points.value,
      "slabearn_points_as_per_rs":this.AddNewLoyaltyConfigurationFormgroup.controls.slabearn_points_as_per_rs.value,
      "customertype": this.AddNewLoyaltyConfigurationFormgroup.controls.customertype.value,
      "transactiontype": this.AddNewLoyaltyConfigurationFormgroup.controls.transactiontype.value,
      "typeoflogic": this.AddNewLoyaltyConfigurationFormgroup.controls.typeoflogic.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
   
      this.adminService.saveLoyaltyLogic(saveLoyaltyLogicData)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.toastr.success(data.message);
        this.AddNewLoyaltyConfigurationFormgroup.reset();
       }
       else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
       else if(data.message.toUpperCase()==="RECORD NOT FOUND"){
         this.toastr.error(data.message);
       }
       
      },
      
      (err: HttpErrorResponse) => {
        this.toastr.error(err.toString());
      });
   
  }
  onEditButtonClick(){
    let saveLoyaltyLogicData={
    
      "slabname": this.AddNewLoyaltyConfigurationFormgroup.controls.slabname.value,
      "slabminvalue":this.AddNewLoyaltyConfigurationFormgroup.controls.slabminvalue.value,
      "slabmaxvalue": this.AddNewLoyaltyConfigurationFormgroup.controls.slabmaxvalue.value,
      "slabearn_points": this.AddNewLoyaltyConfigurationFormgroup.controls.slabearn_points.value,
      "slabearn_points_as_per_rs":this.AddNewLoyaltyConfigurationFormgroup.controls.slabearn_points_as_per_rs.value,
      "customertype": this.AddNewLoyaltyConfigurationFormgroup.controls.customertype.value,
      "transactiontype": this.AddNewLoyaltyConfigurationFormgroup.controls.transactiontype.value,
      "typeoflogic": this.AddNewLoyaltyConfigurationFormgroup.controls.typeoflogic.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",
    }
    this.adminService.edit_loyalty_logic(saveLoyaltyLogicData)
    .subscribe(data => {
     if(data.message.toUpperCase()==="RECORD FOUND"){
      this.toastr.success(data.message);
      this.AddNewLoyaltyConfigurationFormgroup.reset();
     }
     else if(data.status_Code===401){
      this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
      this.router.navigate(['/'])
    }
     else if(data.message.toUpperCase()==="RECORD NOT FOUND"){
       this.toastr.error(data.message);
     }
     
    },
    
    (err: HttpErrorResponse) => {
      this.toastr.error(err.toString());
    });
  }
}
