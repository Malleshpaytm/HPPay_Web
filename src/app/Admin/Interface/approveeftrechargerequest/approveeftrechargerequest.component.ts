import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-approveeftrechargerequest',
  templateUrl: './approveeftrechargerequest.component.html',
  styleUrls: ['./approveeftrechargerequest.component.css']
})
export class ApproveeftrechargerequestComponent implements OnInit {
  approveEftRechargeRequestFormGroup: FormGroup;
  pendingEftRequestsTableData: Array<any>;
  pendingEftRequestsAllData={total_Pending_Records:0,total_Pending_Amt:0};
  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.approveEftRechargeRequestFormGroup = this.fb.group({
      mobile_No: [''],
      from_Date: [''],
      to_Date: [''],
    })
  }
  onSearchButtonClick() {
    let get_pending_ccms_recharge_through_eftData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "mobile_No": this.approveEftRechargeRequestFormGroup.controls.mobile_No.value,
      "from_Date": this.approveEftRechargeRequestFormGroup.controls.from_Date.value,
      "to_Date": this.approveEftRechargeRequestFormGroup.controls.to_Date.value,
    }
    this.adminService.get_pending_ccms_recharge_through_eft(get_pending_ccms_recharge_through_eftData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.pendingEftRequestsAllData = data.data;
          this.pendingEftRequestsTableData = data.data.customer;
          this.pendingEftRequestsAllData.total_Pending_Records=data.data.this.pendingEftRequestsAllData;
          this.pendingEftRequestsAllData.total_Pending_Amt=data.data.total_Pending_Amt;
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
  approveEftRequestButtonClicked(index) {
    debugger;
    let recordToBeApproved=this.pendingEftRequestsTableData[index];
    let approve_pending_ccms_recharge_through_eftData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "mobile_No": recordToBeApproved.mobile_No,
      "customer_Id": recordToBeApproved.customer_Id,
      "txn_Date": recordToBeApproved.txn_Date,
      "amount": recordToBeApproved.amount,
    }
    this.adminService.approve_pending_ccms_recharge_through_eft(approve_pending_ccms_recharge_through_eftData)
    .subscribe(data=>{
      if (data.message.toUpperCase() === 'RECORD FOUND') {
        debugger;
        this.toastr.success(data.data[0].reason);
        this.onSearchButtonClick();
      }
      else if (data.status_Code === 401) {
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
      else {
        this.toastr.error(data.data[0].reason)
      }
    },(err: HttpErrorResponse) => {
      console.log(err)

    })
  }
}
