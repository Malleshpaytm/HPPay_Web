import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcodetransactiondetail',
  templateUrl: './qrcodetransactiondetail.component.html',
  styleUrls: ['./qrcodetransactiondetail.component.css']
})
export class QrcodetransactiondetailComponent implements OnInit {
  isshow:number=0;
  GetQRCodeData:any=[];
  page = 1;
  pageSize = 4;
  collectionSize = 5;

  constructor() { }

  ngOnInit(): void {
    this.ViewQRCodeData();
  }

  ShowTableList(){
    this.isshow=1;
 }
 Reset(){
   this.isshow=0;
 }
 ViewQRCodeData() {
   this.GetQRCodeData = [
     {
       "batchid":726,
       "rocno": 1,
       "retailoutletname": "DTPLUS TEST 1",
       "terminalid": "5000029053",
       "transactiondate": "14/06/2021 12:52:49",
       "transactiontype": "FASTagWallet",
       "product": "-",
       "price": "70.00",
       "volume": "1.43",
       "currency":"FASTagWallet",
       "amount":"100.00",
       "servicecharge":"-",
       "driverstar":0,
       "fsmname":"Kirti Arora",
       "mobilenumber":8368171099,
       "status":"UT"


     },
     {
      "batchid":726,
      "rocno": 2,
      "retailoutletname": "DTPLUS TEST 1",
      "terminalid": "5000029053",
      "transactiondate": "14/06/2021 12:52:49",
      "transactiontype": "FASTagWallet",
      "product": "-",
      "price": "70.00",
      "volume": "0.71",
      "currency":"FASTagWallet",
      "amount":"50.00",
      "servicecharge":"-",
      "driverstar":0,
      "fsmname":"Kirti Arora",
      "mobilenumber":8368171099,
      "status":"UT"

     }
   ];
 }

}
