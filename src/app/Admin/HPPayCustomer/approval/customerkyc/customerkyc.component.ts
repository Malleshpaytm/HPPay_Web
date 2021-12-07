import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customerkyc',
  templateUrl: './customerkyc.component.html',
  styleUrls: ['./customerkyc.component.css']
})
export class CustomerkycComponent implements OnInit {

  
  
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
        "customerid": 1,
        "customername": "Suman",
        
        "email": "suman@gmail.com",
        "createddate":"6 June 2021",
        "proofofidentity":"adhar.jpg",
        "addressproof":"adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      },
      {
        "customerid": 1,
        "customername": "Suman",
        
        "email": "suman@gmail.com",
        "createddate":"6 June 2021",
        "proofofidentity":"adhar.jpg",
        "addressproof":"adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      },
      {
        "customerid": 1,
        "customername": "Suman",
        
        "email": "suman@gmail.com",
        "createddate":"6 June 2021",
        "proofofidentity":"adhar.jpg",
        "addressproof":"adhar.jpg",


        "mobile": "8888888888",
        "pincode": "000000"

      },
      {
        "customerid": 1,
        "customername": "Suman",
        
        "email": "suman@gmail.com",
        "createddate":"6 June 2021",
        "proofofidentity":"adhar.jpg",
        "addressproof":"adhar.jpg",


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
