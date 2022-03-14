import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-managecustomerbonus',
  templateUrl: './managecustomerbonus.component.html',
  styleUrls: ['./managecustomerbonus.component.css']
})
export class ManagecustomerbonusComponent implements OnInit {
  allChecked = false;
  closeResult: string | undefined;
  GetCustomerBonusData: any = [];
  GetCustomerBonusLogData :  any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;
  manageCustomerBonusForm:FormGroup


  constructor(private modalService: NgbModal,
    private fb: FormBuilder,
    private adminService:AdminService
    ) { }

  ngOnInit(): void {
    this.ViewCustomerBonusData();
    this.manageCustomerBonusForm=this.fb.group({
      companyMobileNo:['', Validators.required],
      selectedList:['', Validators.required]
    })
  }
 

  ShowTableList(){
    this.isshow=1;
    if(this.manageCustomerBonusForm.valid){
      let manageCustomerBonusDetails={
        
          // "useragent": "1",
          // "userip": "1",
          // "userid": "1",
          // "mobileno": this.manageCustomerBonusForm.controls.companyMobileNo.value,
          // "status": this.manageCustomerBonusForm.controls.selectedList.value,

          "Useragent":"sujit",
          "Userip":"192.168.1.0",
          "userid":"sujit2",
          "Mobileno": "9999999999",
          "Status": "Approved"
        
      }
      console.log(this.manageCustomerBonusForm.value);
        this.adminService.manageCustomerBonus(manageCustomerBonusDetails).subscribe();
    }
 }

  ViewCustomerBonusData() {
    this.GetCustomerBonusData = [
      {
        "customername": "JRD TRUCKS",
        "mobileno": "9214088829",
        "bonuspoint": 2,
        "status":"Authorized",
        "comments":"AS per MO Request",
        "activeinactive": "Active",
        "createdby": "prakashbharuntia@hpcl.in",
        "createddate": "22/12/2020 09:18:15",
        "modifieddate": "28/12/2020 17:03:13"
       
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
        "modifieddate": "24/11/2020 17:13:15"

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
    this.GetCustomerBonusLogData = [
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



 
 Reset(){
   this.isshow=0;
   this.manageCustomerBonusForm.reset();
 }

  // limitChange(limit: number) {
   
  // }

  // open(content: any) {
  //   this.modalService.dismissAll();
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
 
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}


