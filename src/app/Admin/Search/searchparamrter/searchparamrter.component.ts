import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchparamrter',
  templateUrl: './searchparamrter.component.html',
  styleUrls: ['./searchparamrter.component.css']
})
export class SearchparamrterComponent implements OnInit {
  entityTypeValue: string = '';
  showBody: boolean = false;
  GetCustomerParameterData: any = [];
  GetMerchantParameterData: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = 5;


  constructor() { }

  ngOnInit(): void {
    this.ManageOfficers();
  }

 entityChange(e: any): void {
  this.entityTypeValue = e.target.value;
  if (e.target.value === 'select') {
    this.showBody = false;
  } else {
    this.showBody = true;
  }
}
 ManageOfficers() {
   this.GetCustomerParameterData = [
     {
       "sno":1,
       "select" : true,
       "paramtername": "Customer Name",
       "order":1
    },
     {
      "sno":2,
      "select" : true,
      "paramtername": "Regional Office",
      "order":2
     },
     {
      "sno":3,
       "paramtername": "Customer ID",
       "select" : true,
       "order":3
     },
     {
      "sno":4,
       "paramtername": "Customer Type",
       "select" : true,
       "order":4
     },
     {
      "sno":5,
       "paramtername": "Form Number",
       "select" : true,
       "order":5
     },
     {
      "sno":6,
       "paramtername": "Zonal Office",
       "select" : true,
       "order":6
     },
     {
      "sno":7,
       "paramtername": "User Name",
       "select" : true,
       "order":7
     },
     {
      "sno":8,
       "paramtername": "Status",
       "select" : true,
       "order":8
     },
     {
      "sno":9,
       "paramtername": "Name On Card",
       "select" : false,
       "order":9
     },
     {
      "sno":10,
       "paramtername": "Residence Type",
       "select" : false,
       "order":10
     },
     {
      "sno":11,
       "paramtername": "Constitution",
       "select" : false,
       "order":11
     },
     {
      "sno":12,
       "paramtername": "IT Permanent A/C",
       "select" : false,
       "order":12
     },
     {
      "sno":13,
       "paramtername": "Bank Name",
       "select" : false,
       "order":13
     },
     {
      "sno":14,
       "paramtername": "Bank Branch Name",
       "select" : false,
       "order":14
     },
     {
      "sno":15,
       "paramtername": "Control Card No.",
       "select" : true,
       "order":15
     },
     {
      "sno":16,
       "paramtername": "Area of Operation",
       "select" : false,
       "order":16
     },
     {
      "sno":17,
       "paramtername": "City",
       "select" : true,
       "order":17
     },
     {
      "sno":18,
       "paramtername": "State",
       "select" : true,
       "order":18
     },
     {
      "sno":19,
       "paramtername": "PinCode",
       "select" : true,
       "order":19
     },
     {
      "sno":20,
       "paramtername": "Office Phone",
       "select" : false,
       "order":20
     },
     {
      "sno":21,
       "paramtername": "Mobile",
       "select" : true,
       "order":21
     },
     {
      "sno":22,
       "paramtername": "Email",
       "select" : true,
       "order":22
     },
     {
      "sno":23,
       "paramtername": "District",
       "select" : true,
       "order":23
     }
   ];
   this.GetMerchantParameterData = [
    {
      "sno":1,
      "select" : true,
      "paramtername": "Merchant ID",
      "order":1
   },
    {
     "sno":2,
     "select" : true,
     "paramtername": "Merchant Type",
     "order":2
    },
    {
     "sno":3,
      "paramtername": "Merchant Name",
      "select" : true,
      "order":3
    },
    {
     "sno":4,
      "paramtername": "Retail Outlet Name",
      "select" : true,
      "order":4
    },
    {
     "sno":5,
      "paramtername": "ERP Code",
      "select" : true,
      "order":5
    },
    {
     "sno":6,
      "paramtername": "Status",
      "select" : true,
      "order":6
    },
    {
     "sno":7,
      "paramtername": "Owner",
      "select" : true,
      "order":7
    },
    {
     "sno":8,
      "paramtername": "Regional Office",
      "select" : true,
      "order":8
    },
    {
     "sno":9,
      "paramtername": "Retail Off City",
      "select" : true,
      "order":9
    },
    {
     "sno":10,
      "paramtername": "Retail Off District",
      "select" : true,
      "order":10
    },
    {
     "sno":11,
      "paramtername": "Retail Off State",
      "select" : true,
      "order":11
    },
    {
     "sno":12,
      "paramtername": "Retail Off Pin Code",
      "select" : true,
      "order":12
    }
    
  ];
 }

}
