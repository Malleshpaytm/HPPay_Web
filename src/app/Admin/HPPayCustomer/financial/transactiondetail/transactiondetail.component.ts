import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent implements OnInit {
  closeResult: string | undefined;
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetTransactionDetailData: any = [];
  GetTransactionLocationData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow: number = 0;
  istlshow: number = 0;
  transactionDetailFormGroup: FormGroup
  constructor(private modalService: NgbModal, private customerService: CustomerService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router,) { }

  ngOnInit(): void {
    this.transactionDetailFormGroup = this.fb.group({
      mobile_No: [''],
      from_Date: [''],
      to_Date: [''],
    })
  }
  onSearchButtonClick() {
    debugger;
    let view_transaction_detail_customerData = {
      "mobile_No": this.transactionDetailFormGroup.controls.mobile_No.value,
      "from_Date": this.transactionDetailFormGroup.controls.from_Date.value,
      "to_Date": this.transactionDetailFormGroup.controls.to_Date.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",

    }
    this.customerService.view_transaction_detail_customer(view_transaction_detail_customerData).subscribe(data => {
      if (data.message.toUpperCase() === 'RECORD FOUND') {
        // this.manageCustomerProfileTableData = data.data;
      }
      else if (data.status_Code === 401) {
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
        this._document.defaultView.location.reload();
      }
      else {
        this.toastr.error(data.message)
      }
    }, (err: HttpErrorResponse) => {
      console.log(err)
    })
  }

  ViewTransactionDetailData() {

    this.GetTransactionDetailData = [
      {
        "sno": 1,
        "merchantid": "3015146710",
        "merchant": "MURALI KRISHNA BUJJI FILLING STATION, TIRUVUR",
        "batchid": "369/1",
        "accountnumber": "9907042100",
        "vehicleno": "",
        "txndate": "07/04/2021 18:09:30",
        "txntype": "CCMS Recharge",
        "product": "-",
        "price": "-",
        "volume": 0,
        "currency": "CCAVENUE",
        "servicecharge": "-",
        "amount": 100,
        "odometerreading": "-",
        "status": "SUCCESS"

      }
    ];
  }

  ViewTransactionLocationData() {
    this.GetTransactionLocationData = [
      {
        "name": "MURALI KRISHNA BUJJI FILLING STATION",
        "location": "VIJAYAWADA RRO",
        "city": "TIRUVUR",
        "district": "KRISHNA",
        "NH": "NA",
        "state": "ANDHRA PRADESH"
      }
    ];
  }

  ShowTableList() {
    this.isshow = 1;
  }
  ShowLocationTableList() {
    this.istlshow = 1;
  }
  Reset() {
    this.isshow = 0;
    this.istlshow = 0;
  }
  limitChange(limit: number) {

  }
  open(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
