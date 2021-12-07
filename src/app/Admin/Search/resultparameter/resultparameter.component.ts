import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultparameter',
  templateUrl: './resultparameter.component.html',
  styleUrls: ['./resultparameter.component.css']
})
export class ResultparameterComponent implements OnInit {
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
        "paramtername": "Zonal Office",
        "order":7
     },
      {
       "sno":2,
       "select" : true,
       "paramtername": "Status",
       "order":9
      },
      {
       "sno":3,
        "paramtername": "City",
        "select" : true,
        "order":18
      },
      {
       "sno":4,
        "paramtername": "State",
        "select" : true,
        "order":19
      },
      {
       "sno":5,
        "paramtername": "PinCode",
        "select" : true,
        "order":20
      },
      {
       "sno":6,
        "paramtername": "Mobile",
        "select" : true,
        "order":22
      },
      {
       "sno":7,
        "paramtername": "Email",
        "select" : true,
        "order":23
      },
      {
       "sno":8,
        "paramtername": "District",
        "select" : true,
        "order":24
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
       "paramtername": "User Name",
       "select" : true,
       "order":8
     },
     {
      "sno":9,
       "paramtername": "Regional Office",
       "select" : true,
       "order":9
     },
     {
      "sno":10,
       "paramtername": "Beneficiary Name",
       "select" : true,
       "order":10
     }
     
   ];
  }

}
