import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-approvecustomerbonus',
  templateUrl: './approvecustomerbonus.component.html',
  styleUrls: ['./approvecustomerbonus.component.css']
})
export class ApprovecustomerbonusComponent implements OnInit {
  closeResult: string | undefined;
  GetApproveCustomerBonusData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  approvalBonusTable: boolean=false;
  showapprovalInfo: boolean;
  approveCustomerForm:FormGroup;




  constructor(
    private fb:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.ViewApproveCustomerBonusData();
    this.approveCustomerForm=this.fb.group({
      mobileNumber:['',Validators.required]
    })

  }

  ShowTableList(){
    this.approvalBonusTable=true;
    if(this.approveCustomerForm.valid){
      let approveCustomerBonusDetails={
          "useragent": "1",
          "userip": "1",
          "userid": "1",
          "mobileno": this.approveCustomerForm.controls.mobileNumber.value,
          "status": "string",
          "approval_Ramarks": "string"
      }
      console.log(this.approveCustomerForm.value);
      this.adminService.approveCustomerBonus(approveCustomerBonusDetails).subscribe();
    }
 }


  ViewApproveCustomerBonusData() {
    this.GetApproveCustomerBonusData = [
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
  }


 Reset(){
   this.approvalBonusTable=false;
 }

 approveCustomerBonus():any{
   this.showapprovalInfo=true;
 }

   
  }



