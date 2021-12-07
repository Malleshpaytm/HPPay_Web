import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-smsalertdealer',
  templateUrl: './smsalertdealer.component.html',
  styleUrls: ['./smsalertdealer.component.css']
})
export class SmsalertdealerComponent implements OnInit {

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
        "customerid": "SMS On Cash Reload",
        

      },
      {
        "customerid": "SMS On CCMS Recharge",
        

      },
      {
        "customerid": "SMS On Dealer Sattlement",
        

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
