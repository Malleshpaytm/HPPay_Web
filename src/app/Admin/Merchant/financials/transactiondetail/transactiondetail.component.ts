import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent implements OnInit {
  transactionDetailsFormGroup: FormGroup;
  showSettlementDetails: boolean;
  searchTrasactionsTableData: any;
  constructor(private modalService: NgbModal, private adminService: AdminService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.transactionDetailsFormGroup = this.fb.group({
      merchantid: ['', Validators.required],
      fromdate: ['', Validators.required],
      todate: ['', Validators.required],
      transactionTypes: ['']
    });
  }
  onSearchButtonClick() {
    let transactionDetailsByMerchantData =
    {
      "merchant_Id": this.transactionDetailsFormGroup.controls['merchantid'].value,
      "from_date": this.transactionDetailsFormGroup.controls['fromdate'].value,
      "to_date": this.transactionDetailsFormGroup.controls['todate'].value,
      "transaction_Type": this.transactionDetailsFormGroup.controls['transactionTypes'].value,
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }

    this.adminService.transactionDetailsByMerchant(transactionDetailsByMerchantData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
          this.searchTrasactionsTableData = data.data;
          this.showSettlementDetails = true;
        }
        else if (data.message.toUpperCase() === 'RECORD NOT FOUND') {
          this.toastr.error("No record found!")
        }
        else if (data.status_Code === 401) {
          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
      });
  }
  Reset() {
    this.transactionDetailsFormGroup.reset();
    this.showSettlementDetails = false;
  }
}
