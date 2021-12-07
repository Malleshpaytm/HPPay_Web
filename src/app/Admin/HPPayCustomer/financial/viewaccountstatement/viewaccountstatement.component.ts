import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-viewaccountstatement',
  templateUrl: './viewaccountstatement.component.html',
  styleUrls: ['./viewaccountstatement.component.css']
})
export class ViewaccountstatementComponent implements OnInit {
  closeResult: string | undefined;
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetCustomerStatementSummaryData: any = [];
  GetCCMSAccountSummaryData:any = [];
  GetTransactionDetailsData:any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;
  accountStatementFormGroup: FormGroup;
  constructor(private modalService: NgbModal,private customerService: CustomerService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router,) { }

  ngOnInit(): void {
    this.accountStatementFormGroup = this.fb.group({
      mobile_No: [''],
      from_Date: [''],
      to_Date: [''],
    })
  }
  onSearchButtonClick(){
    debugger;
    let get_customer_account_statementData = {
      "mobile_No": this.accountStatementFormGroup.controls.mobile_No.value,
      "from_Date": this.accountStatementFormGroup.controls.from_Date.value,
      "to_Date": this.accountStatementFormGroup.controls.to_Date.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1",

    }
    this.customerService.get_customer_account_statement(get_customer_account_statementData).subscribe(data => {
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
 ViewAccountStatmentSummaryData() {
    
    this.GetCustomerStatementSummaryData = [
      {
        "customername": "Test",
        "address": "NEW DELHI",
        "statementdate": "2021/06/10",
        "period": "From 01/04/2021 To 02/04/2021",
      }
    ];
    this.GetCCMSAccountSummaryData = [
      {
        "openingbalance": "1,000",
        "credits": "0.00",
        "debits": "0.00",
        "closingbalance": "1,000",
        "totalpayback":0
      }
    ];
  }
  ShowTableList(){
    this.isshow=1;
 }

 Reset(){
   this.isshow=0;
 }
  limitChange(limit: number) {
   
  }
 open(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }
}
