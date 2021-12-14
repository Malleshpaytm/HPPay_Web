import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-merchant-details-modal',
  templateUrl: './merchant-details-modal.component.html',
  styleUrls: ['./merchant-details-modal.component.css']
})
export class MerchantDetailsModalComponent implements OnInit {
  merchantProfile:any;
  constructor(public dialogRef: MatDialogRef<MerchantDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private adminService:AdminService,   private fb: FormBuilder) { }
    rawMerchantDetailsFormGroup: FormGroup;
   
    counter = true;
   
   
  ngOnInit(): void {
 debugger;
    this.rawMerchantDetailsFormGroup = this.fb.group({
      commFax: [''],
      commPhoneNumber: [''],
      commStdCode: [''],
      communicationPinCode: [''],
      permanentPinCode: [''],
      permanentStdCode: [''],
      permanentPhoneNumber: [''],
      permanentFax: [''],
    })
    this.getMerchantDetails();
    debugger;
  
   
  }
  getMerchantDetails(){
    debugger;
    let searchMerchantByMerchantIdData={
      "merchantid": this.data.merchantid,
  "useragent": "web",
  "userip": "1",
  "userid": "1"
    }
    this.adminService.searchMerchantByMerchantId(searchMerchantByMerchantIdData)
      .subscribe(data=>{
        console.log(data.data)
        this.merchantProfile=data.data[0];
      })
  }
 

}
