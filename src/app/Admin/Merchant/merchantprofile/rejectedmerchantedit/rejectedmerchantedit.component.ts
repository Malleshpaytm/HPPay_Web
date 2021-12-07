import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rejectedmerchantedit',
  templateUrl: './rejectedmerchantedit.component.html',
  styleUrls: ['./rejectedmerchantedit.component.css']
})
export class RejectedmerchanteditComponent implements OnInit {

  
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  isshow:number=0;
  isdetail:number=0;
  isfield:number=1;
  isbasic:number=1;
iscontact:number=0;
ispayment:number=0;
isterminal:number=0;
issummary:number=0;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetManageUserData();
  }
  viewprofile(){
    this.iscontact=0;
this.isbasic=0;
this.ispayment=0;
this.issummary=0;
this.isterminal=0
this.isfield=1;
this.isdetail=0;

  }
  AddMerchant(){
    this.isdetail=1;
    this.isfield=0;
    this.isshow=0;
    this.isbasic=1;

  }
  showcontact(){
this.iscontact=1;
this.isbasic=0;
this.ispayment=0;
this.issummary=0;
this.isterminal=0

  }
  basicinfor(){
    this.isbasic=1;
    this.iscontact=0;
    this.ispayment=0;
    this.issummary=0;
    this.isterminal=0

  }
  showpayment(){
    this.ispayment=1;
    this.isbasic=0;
    this.iscontact=0;
    this.issummary=0;
this.isterminal=0
  }
  showterminal(){
    this.isterminal=1;
    this.ispayment=0;
    this.isbasic=0;
    this.iscontact=0;
    this.issummary=0;

  }
  showsummary(){
    this.issummary=1;
    this.isterminal=0;
    this.ispayment=0;
    this.isbasic=0;
    this.iscontact=0;
  }

  GetManageUserData() {
    this.GetSaveData = [
      {
        "customerid": 1,
        "customername": "Suman",
        
        "email": "suman@gmail.com",

        "mobile": "8888888888",
        "pincode": "000000"

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
