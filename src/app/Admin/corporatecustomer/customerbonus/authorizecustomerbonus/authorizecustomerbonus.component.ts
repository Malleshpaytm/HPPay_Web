import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-authorizecustomerbonus',
  templateUrl: './authorizecustomerbonus.component.html',
  styleUrls: ['./authorizecustomerbonus.component.css']
})
export class AuthorizecustomerbonusComponent implements OnInit {
  closeResult: string | undefined;
  GetAuthorizeCustomerBonusData: any = [];
  GetAuthorizeCustomerBonusLogData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;
  showTableListData=false;
  approveManageBonusForm:FormGroup
  showInfoMessage: boolean;


  constructor(private modalService: NgbModal,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.ViewAuthorizeCustomerBonusData();
    this.approveManageBonusForm=this.fb.group({
      mobileNumber:['', Validators.required]
    })
  }

 

  ViewAuthorizeCustomerBonusData() {
    this.GetAuthorizeCustomerBonusData = [
      {
        "customername": "JRD TRUCKS",
        "mobileno": "9214088829",
        "bonuspoint": 2,
        "status":"Authorized",
        "comments":"AS per MO Request",
        "activeinactive": "Active",
        "createdby": "prakashbharuntia@hpcl.in",
        "createddate": "22/12/2020 09:18:15",
        "modifieddate": "28/12/2020 17:03:13",
        "remark":"Okay"
       
      },
      {
        "customername": "Guru Ram Rai Edu Mission",
        "mobileno": "8700276931",
        "bonuspoint": 2,
        "status":"Approved",
        "comments":"Approved as per request from MO",
        "activeinactive": "Inactive",
        "createdby": "charucsrawat_MO",
        "createddate": "24/11/2020 13:37:51",
        "modifieddate": "24/11/2020 17:13:15",
        "remark":"NA"

      },
      {
        "customername": "JRD TRUCKS",
        "mobileno": "9214088829",
        "bonuspoint": 1,
        "status":"Authorized",
        "comments":"AS per MO Request",
        "activeinactive": "Active",
        "createdby": "prakashbharuntia@hpcl.in",
        "createddate": "16/11/2020 19:13:16",
        "modifieddate": "03/12/2020 16:48:51"

      },
      {
        "customername": "Kaar Auto Private Ltd.",
        "mobileno": "7895306666",
        "bonuspoint": 10,
        "status":"Pending",
        "comments":"Okay",
        "activeinactive": "Inactive",
        "createdby": "charucsrawat_MO",
        "createddate": "01/11/2020 12:25:22",
        "modifieddate": "28/12/2020 17:03:13"

      }
    ];
    this.GetAuthorizeCustomerBonusLogData = [
      {
       "srno" : 1,
       "approvedrejectedby" : "prakashbharuntia@hpcl.in",
       "approvedrejectiondate" : "22/12/2020 09:18:15",
       "status" : "Pending",
       "comments" : "Kindly Approve"
      },
      {
        "srno" : 2,
        "approvedrejectedby" : "prakashbharuntia@hpcl.in",
        "approvedrejectiondate" : "22/12/2020 09:18:15",
        "status" : "Approved",
        "comments" : "ok"
      }
      
    ];
  }

  ShowTableList(){
    this.showTableListData=true;
 }
 Reset(){
   this.isshow=0;
   this.showTableListData=false;
   this.approveManageBonusForm.reset()
 }

 showInfoPopUp(){
   this.showInfoMessage=true;
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
