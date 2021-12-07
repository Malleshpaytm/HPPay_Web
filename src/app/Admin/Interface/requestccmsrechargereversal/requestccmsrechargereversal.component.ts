import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-requestccmsrechargereversal',
  templateUrl: './requestccmsrechargereversal.component.html',
  styleUrls: ['./requestccmsrechargereversal.component.css']
})
export class RequestccmsrechargereversalComponent implements OnInit {
  requestCCMSrechargeReversalformGroup: FormGroup;
  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.requestCCMSrechargeReversalformGroup = this.fb.group({
      mobile_No: [''],
      amount: [''],
      //sender_Name: [''],
      txn_Date: [''],
      comment: [''],
    })
  }
  onSubmitButtonClick() {
    debugger;
    let request_ccms_recharge_reversal_through_eftData = {

      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "mobile_No": this.requestCCMSrechargeReversalformGroup.controls.mobile_No.value,
      "amount": this.requestCCMSrechargeReversalformGroup.controls.amount.value,
      //"sender_Name": this.requestCCMSrechargeThroughEFTformGroup.controls.sender_Name.value,
      "txn_Date": this.requestCCMSrechargeReversalformGroup.controls.txn_Date.value,
      "comment": this.requestCCMSrechargeReversalformGroup.controls.comment.value,
    }
    this.adminService.request_ccms_recharge_reversal_through_eft(request_ccms_recharge_reversal_through_eftData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.toastr.success(data.data[0].reason)
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error(data.message)
        }
      }, (err: HttpErrorResponse) => {
        console.log(err)
    })
  }
}
