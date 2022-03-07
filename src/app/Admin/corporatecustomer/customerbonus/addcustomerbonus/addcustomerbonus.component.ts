import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomerbonus',
  templateUrl: './addcustomerbonus.component.html',
  styleUrls: ['./addcustomerbonus.component.css']
})
export class AddcustomerbonusComponent implements OnInit {
  alertCustomerinfo: boolean;
  manageCustomerBonusForm:FormGroup

  constructor(
    private formBuilder:FormBuilder
  ) { 
   
  }

  ngOnInit(): void {
    this.inManageCustomerBonus();
    this.resetForm();
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
    })
    
  }

  onSubmitAddCustomer():any{
   const data=this.manageCustomerBonusForm.value
   console.log(data);
  }

  resetForm():any{
   const arase=this.manageCustomerBonusForm.reset();
  }
  
 
  

}
