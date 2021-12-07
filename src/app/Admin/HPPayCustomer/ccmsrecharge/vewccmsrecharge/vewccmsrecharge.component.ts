import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vewccmsrecharge',
  templateUrl: './vewccmsrecharge.component.html',
  styleUrls: ['./vewccmsrecharge.component.css']
})
export class VewccmsrechargeComponent implements OnInit {
  allChecked = false;
  closeResult: string | undefined;
  GetCCMSRechargeData: any = [];
  GetTransactionDetailsLogData :  any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ViewCCMSRechargeData();
  }

   ViewCCMSRechargeData() {
    this.GetCCMSRechargeData = [
      {
        "srno": 1,
        "zo": "NORTH CENTRAL ZONE",
        "ro": "KANPUR RRO",
        "customerid":"1011756216",
        "customername":"Agni",
        "orderid": "9012240",
        "transactionsource": "HDFC PG",
        "transactionid": "310007247824",
        "requestamount": "1.00",
        "transactiondate": "11-06-2021 11:30:54",
        "transactionstatus": "Completed"

      },
      {
        "srno": 2,
        "zo": "NORTH ZONE",
        "ro": "DELHI RRO",
        "customerid":"1011756507",
        "customername":"ABC",
        "orderid": "9012239",
        "transactionsource": "ICIC PG",
        "transactionid": "310007247824",
        "requestamount": "848.00",
        "transactiondate": "11-06-2021 09:07:57",
        "transactionstatus": "Presented"

      },
      {
        "srno": 3,
        "zo": "NORTH CENTRAL ZONE",
        "ro": "KANPUR RRO",
        "customerid":"1011756216",
        "customername":"Agni",
        "orderid": "9012240",
        "transactionsource": "HDFC PG",
        "transactionid": "310007247824",
        "requestamount": "1.00",
        "transactiondate": "11-06-2021 11:30:54",
        "transactionstatus": "Completed"

      },
      {
        "srno": 4,
        "zo": "NORTH CENTRAL ZONE",
        "ro": "KANPUR RRO",
        "customerid":"1011756216",
        "customername":"Agni",
        "orderid": "9012240",
        "transactionsource": "HDFC PG",
        "transactionid": "310007247824",
        "requestamount": "1.00",
        "transactiondate": "11-06-2021 11:30:54",
        "transactionstatus": "Completed"

      }
    ];
    this.GetTransactionDetailsLogData = [
      {
       "operationtype" : "Presentation Response",
       "paymentstatus" : "Auth",
       "transactiondate" : "11/06/2021 11:31:11",
      },
      {
       "operationtype" : "Transaction Posted",
       "paymentstatus" : "Completed",
       "transactiondate" : "11/06/2021 11:31:11"
      },
      {
       "operationtype" : "First Time Response Received From Paytm",
       "paymentstatus" : "First Time Response Received From Paytm Through Response Handler",
       "transactiondate" : "11/06/2021 11:31:11"
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
