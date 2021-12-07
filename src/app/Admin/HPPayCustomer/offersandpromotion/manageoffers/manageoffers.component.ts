import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manageoffers',
  templateUrl: './manageoffers.component.html',
  styleUrls: ['./manageoffers.component.css']
})
export class ManageoffersComponent implements OnInit {

 
  
  
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
  ShowTableList(){
    this.isshow=1;
 }
 Reset(){
   this.isshow=0;
 }


  GetManageUserData() {
    this.GetSaveData = [
     
      {
        "imageid":1,
        "displayorder": 1,
        "title": "VFIRBI",
        "isactive": "True",
        "validfrom": "2020-06-06",
        "validto": "2021-06-06",

        "dashboardimage": "suman.jpg",
        "detailimage": "suman.jpg"

      },
      {
        "imageid":1,
        "displayorder": 1,
        "title": "VFIRBI",
        "isactive": "True",
        "validfrom": "2020-06-06",
        "validto": "2021-06-06",

        "dashboardimage": "suman.jpg",
        "detailimage": "suman.jpg"

      },
      {
        "imageid":1,
        "displayorder": 1,
        "title": "VFIRBI",
        "isactive": "True",
        "validfrom": "2020-06-06",
        "validto": "2021-06-06",

        "dashboardimage": "suman.jpg",
        "detailimage": "suman.jpg"

      }
    ];
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
