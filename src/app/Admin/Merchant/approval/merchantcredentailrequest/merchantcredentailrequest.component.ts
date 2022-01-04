import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-merchantcredentailrequest',
  templateUrl: './merchantcredentailrequest.component.html',
  styleUrls: ['./merchantcredentailrequest.component.css']
})
export class MerchantcredentailrequestComponent implements OnInit {
  isshow: number = 0;
  merchantProfile:any;
  MerchantcredentailrequestFormGroup:FormGroup;
  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, 
    private adminService: AdminService, private toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.MerchantcredentailrequestFormGroup=this.fb.group({
      merchantid:['']
    })
  }

  ShowTableList() {
    this.isshow = 1;
  }
  Reset() {
    this.MerchantcredentailrequestFormGroup.reset();
    this.isshow = 0;
  }
  getMerchantDetails(){
    debugger;
    let searchMerchantByMerchantIdData={
      "merchantid": this.MerchantcredentailrequestFormGroup.controls.merchantid.value,
  "useragent": "web",
  "userip": "1",
  "userid": "1"
    }
    this.adminService.searchMerchantByMerchantId(searchMerchantByMerchantIdData)
      .subscribe(data=>{
        console.log(data.data);
        this.ShowTableList();
        this.merchantProfile=data.data[0];
      })
  }
  onSubmitButtonClick() {
    debugger;
    let reset_password_requestData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "merchantid": this.MerchantcredentailrequestFormGroup.controls.merchantid.value,
    }
    this.adminService.reset_password_request(reset_password_requestData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.toastr.success(data.message);
          this.Reset();
      
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
          console.log(err);
        })
  }
}
