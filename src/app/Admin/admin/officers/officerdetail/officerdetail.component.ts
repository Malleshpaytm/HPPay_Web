import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officerdetail',
  templateUrl: './officerdetail.component.html',
  styleUrls: ['./officerdetail.component.css']
})
export class OfficerdetailComponent implements OnInit {
isshow:number=0;
GetSavedData:any=[];

  page = 1;
  pageSize = 4;
  collectionSize = 5;
  constructor() { }

  ngOnInit(): void {
    this.ManageOfficers();
  }

 
  ShowTableList(){
     this.isshow=1;
  }
  Reset(){
    this.isshow=0;
  }
  ManageOfficers() {
    this.GetSavedData = [
      {
        "slno":1,
        "zo": "Test",
        "ro": "VFIRBI",
        "state": "Odisha",
        "dist": "Jsg",
        "markettingofficername": "suman",

        "markettingofficeremail": "suman@gmail.com",
        "zonalofficername": "suman",
        "zonalofficeremail": "suman@gmail.com"


      },
      {
        "slno":2,
        "zo": "Test",
        "ro": "VFIRBI",
        "state": "Odisha",
        "dist": "Jsg",
        "markettingofficername": "suman",

        "markettingofficeremail": "suman@gmail.com",
        "zonalofficername": "suman",
        "zonalofficeremail": "suman@gmail.com"

      },
      {
        "slno":3,
        "zo": "Test",
        "ro": "VFIRBI",
        "state": "Odisha",
        "dist": "Jsg",
        "markettingofficername": "suman",

        "markettingofficeremail": "suman@gmail.com",
        "zonalofficername": "suman",
        "zonalofficeremail": "suman@gmail.com"

      }
    ];
  }

}
