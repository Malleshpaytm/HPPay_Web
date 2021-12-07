import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settlementreport',
  templateUrl: './settlementreport.component.html',
  styleUrls: ['./settlementreport.component.css']
})
export class SettlementreportComponent implements OnInit {

  
  
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetManageUserData();
  }

  GetManageUserData() {
    this.GetSaveData = [
      {
        "zo": "East",
        "ro": "West",
        
        "merchantid": "00000",

        "outletname": "test outlet",
        "terminalid": "000000",
        "batchid": "000000",
        "amount": "50000",
        
        "transactiondate": "2020-02-02",

        "settlementdate": "2020-02-02",
        "pendingdate": "2020-02-02"

      },
      {
        "zo": "East",
        "ro": "West",
        
        "merchantid": "00000",

        "outletname": "test outlet",
        "terminalid": "000000",
        "batchid": "000000",
        "amount": "50000",
        
        "transactiondate": "2020-02-02",

        "settlementdate": "2020-02-02",
        "pendingdate": "2020-02-02"

      },
      {
        "zo": "East",
        "ro": "West",
        
        "merchantid": "00000",

        "outletname": "test outlet",
        "terminalid": "000000",
        "batchid": "000000",
        "amount": "50000",
        
        "transactiondate": "2020-02-02",

        "settlementdate": "2020-02-02",
        "pendingdate": "2020-02-02"

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
  toggleCheckAll() {
    this.setList(this.allChecked);
  }
  setList(checkAll: boolean) {
    // this.DataList.forEach((c: DatatoList) => {
    //   c.isChecked = checkAll;
    //});
  }
  setAllChecked() {
    //return this.fgSystemList.filter((c: FgSystemToList) => c.isChecked === true).length === this.fgSystemList.length;
  }

}
