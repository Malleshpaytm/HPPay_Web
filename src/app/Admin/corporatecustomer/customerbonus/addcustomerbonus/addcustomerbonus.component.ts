import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-addcustomerbonus',
  templateUrl: './addcustomerbonus.component.html',
  styleUrls: ['./addcustomerbonus.component.css']
})
export class AddcustomerbonusComponent implements OnInit {
  alertCustomerinfo: boolean;
  manageCustomerBonusForm:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private adminService:AdminService
    
  ) { 
   
  }

  ngOnInit(): void {
    this.inManageCustomerBonus();
  }
 

  // onSubmitAddCustomer():any{
  //   this.alertCustomerinfo=true
  // if(this.manageCustomerBonusForm.controls.mobileNumber==this.ViewCustomerBonusData().GetCustomerBonusData)
  // }
 

  inManageCustomerBonus():any{
    this.manageCustomerBonusForm=this.formBuilder.group({
      mobileNumber:['', Validators.required],
      customerName:['', Validators.required],
      address:['', Validators.required],
      bonusPoints:['', Validators.required],
      comments:['', Validators.required],
    })
    
  }

  onSubmitAddCustomer():any{
    this.alertCustomerinfo=true;
   const data=this.manageCustomerBonusForm.value
   console.log(data);
   if(this.manageCustomerBonusForm.valid){
     let addCustomerbonusData={
      
        "useragent": "1",
        "userip": "1",
        "userid": "1",
        "mobileno": this.manageCustomerBonusForm.controls.mobileNumber.value,
        "customer_Name": this.manageCustomerBonusForm.controls.customerName.value,
        "customer_Address": this.manageCustomerBonusForm.controls.address.value,
        "bonus_points": this.manageCustomerBonusForm.controls.bonusPoints.value,
        "comments": this.manageCustomerBonusForm.controls.comments.value
      }
      console.log(this.manageCustomerBonusForm.value);
      
      this.adminService.addCustomerBonus(addCustomerbonusData).subscribe();
      
     }
  
  }
}
