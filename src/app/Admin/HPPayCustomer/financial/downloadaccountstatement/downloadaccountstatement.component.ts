import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units


@Component({
  selector: 'app-downloadaccountstatement',
  templateUrl: './downloadaccountstatement.component.html',
  styleUrls: ['./downloadaccountstatement.component.css']
})
export class DownloadaccountstatementComponent implements OnInit {
  closeResult: string | undefined;
  showBody: boolean = false;
  entityTypeValue: string = '';
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
  reportTypeChange(e: any): void {
    this.entityTypeValue = e.target.value;
    if (e.target.value === 'select') {
      this.showBody = false;
    } else {
      this.showBody = true;
    }
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
        const doc = new jsPDF();

doc.text(data.data, 10, 10);
doc.save("a4.pdf");
        // this.customerstatement=data.data.customerstatement[0];
        // this.ccmsacctsummary=data.data.ccmsacctsummary[0];
        // this.transactionsummary=data.data.transactionsummary;
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
