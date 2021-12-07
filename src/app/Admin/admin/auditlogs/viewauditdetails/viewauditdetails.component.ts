import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewauditdetails',
  templateUrl: './viewauditdetails.component.html',
  styleUrls: ['./viewauditdetails.component.css']
})
export class ViewauditdetailsComponent implements OnInit {
 isshow:number=0;
 GetCustomerData:any=[];
 GetHotlistData:any = [];
 GetMerchantData:any=[];

  page = 1;
  pageSize = 4;
  collectionSize = 5; 
  selectedLevel:any;
  
  constructor() { }
  
  selectedEntity(){
   this.GetCustomerData=[];
   this.GetHotlistData=[];
   this.GetMerchantData=[];
    
  }
  ngOnInit(): void {
    //this.ViewAuditDetails();
  }
   ShowTableList(){
   this.ViewAuditDetails(this.selectedLevel);
   this.GetCustomerData=[];
   this.GetHotlistData=[];
   this.GetMerchantData=[];
  }
  Reset(){
    this.isshow=0;
  }
  ViewAuditDetails(selectedLevel:string) {
    if (selectedLevel == "Customer"){
    this.GetCustomerData = [
      {
        "CustomerID":1011756516,
        "name": "A",
        "location": "SECUNDERABAD RRO",
        "status": "Active",
        "modifiedby": "Administrator",
        "modifyon": "04/06/2021 11:18:00",
        "action": "Update"
      },
      {
        "CustomerID":1011756516,
        "name": "ABC",
        "location": "CHENNAI RRO",
        "status": "Active",
        "modifiedby": "Administrator",
        "modifyon": "04/06/2021 11:18:00",
        "action": "Create"

      },
      {
        "CustomerID":1011756435,
        "name": "B",
        "location": "DELHI RRO",
        "status": "Active",
        "modifiedby": "Administrator",
        "modifyon": "13/05/2021 17:03:00",
        "action": "Create"

      }
    ];
    }
  else if (selectedLevel == "Hotlist"){
     this.GetHotlistData = [
      {
        "AccountID":3119523720,
        "AccountType": "Merchant",
        "ActionTaken": "Reactivate",
        "Reason": "Testing",
        "Remark": "Kirti@verifone, 26/04/2021, test",
        "modifiedby": "kirti@verifone",
        "modifyon": "04/06/2021 11:18:00",
        
      },
      {
        "AccountID":3011190002 ,
        "AccountType": "Merchant",
        "ActionTaken": "Temporary Hotlisted",
        "Reason": "Card Owner Requested",
        "Remark": "Kirti@verifone, 26/04/2021, test",
        "modifiedby": "Administrator",
        "modifyon": "04/06/2021 11:18:00",

      },
      {
        "AccountID":3113645300 ,
        "AccountType": "Merchant",
        "ActionTaken": "Reactivate",
        "Reason": "Card Owner Requested",
        "Remark": "Kirti@verifone, 20/04/2021, done",
        "modifiedby": "Administrator",
        "modifyon": "04/06/2021 11:18:00",

      }
    ];
  }
  }
}
