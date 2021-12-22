import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-verifycustomer',
  templateUrl: './verifycustomer.component.html',
  styleUrls: ['./verifycustomer.component.css']
})
export class VerifycustomerComponent implements OnInit {
  pendingCorporateCustomerFormGroup:FormGroup;
  constructor(@Inject(DOCUMENT) private _document: Document,
  private router: Router, private adminService: AdminService, 
  private toastr: ToastrService, private fb: FormBuilder,
  private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pendingCorporateCustomerFormGroup=this.fb.group({
      category:[''],
      fromDate:[''],
      toDate:['']
    })
  }
searchPendingCorporateCustomer(){
  let pendingCorporateCustomerCreationData = {
    
  "category": this.pendingCorporateCustomerFormGroup.controls.category.value,
  "fromDate": this.pendingCorporateCustomerFormGroup.controls.fromDate.value,
  "toDate": this.pendingCorporateCustomerFormGroup.controls.toDate.value,
  "useragent": "web",
  "userip": "1",
  "userid": "1",
  }
  this.adminService.corporateCustomerRegistration(pendingCorporateCustomerCreationData)
    .subscribe(data => {
      debugger;
      if(data.message.toUpperCase()==='RECORD FOUND'){
       
      }
      
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/']);
        this._document.defaultView.location.reload();
      }
      else{
        this.toastr.error(data.message)
      }

    },
      (err: HttpErrorResponse) => {
        console.log(err)
      })
    
}
Reset(){
  this.pendingCorporateCustomerFormGroup.reset();
}
}
