import { DOCUMENT } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer/customer.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
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
  customerstatement:Array<any>;
  ccmsacctsummary:Array<any>;
  transactionsummary:Array<any>;
  constructor(private modalService: NgbModal,private customerService: CustomerService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private _document: Document, private toastr: ToastrService, private router: Router,) { }
    @ViewChild('summaryTable') summaryTable: ElementRef;
    @ViewChild('ccmsTable') ccmsTable: ElementRef;
    @ViewChild('transactionTable') transactionTable: ElementRef;
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
        this.ShowTableList();
        this.customerstatement=data.data.customerstatement[0];
        this.ccmsacctsummary=data.data.ccmsacctsummary[0];
        this.transactionsummary=data.data.transactionsummary;
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
  ShowTableList(){
    this.isshow=1;
 }

 Reset(){
   this.isshow=0;
   this.accountStatementFormGroup.reset();
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
  public downloadAsPDF() {
    debugger;
    var data = document.getElementById('transactionTable');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save(`${this.accountStatementFormGroup.controls.mobile_No.value}.pdf`);
    });
  }
    // const doc = new jspdf();
   
    // const summaryTable = this.summaryTable.nativeElement;
    // const ccmsTable = this.ccmsTable.nativeElement;
    // var data = document.getElementById('transactionTable')
    // const documentDefinition =doc.html(data.innerHTML)
    // // var html = htmlToPdfmake(transactionTable.innerHTML);
    // // // var html2 = htmlToPdfmake(ccmsTable.innerHTML);
    // // // var html3 = htmlToPdfmake(transactionTable.innerHTML);
     
    // // const documentDefinition = { content: html };
    // // const documentDefinition2 = { content: html2 };
    // // const documentDefinition3 = { content: html3 };
    // pdfMake.createPdf(documentDefinition).open(); 
     
  //}
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
