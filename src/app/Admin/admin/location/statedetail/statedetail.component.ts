import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IRandomUsers } from '../regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-statedetail',
  templateUrl: './statedetail.component.html',
  styleUrls: ['./statedetail.component.scss']
})
export class StatedetailComponent implements OnInit {


  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  statesDropdownValues: Array<any>;

  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['sno', 'stateCode',
    'stateName', 'actions'];
  private dataArray: any;
  constructor(private toastr:ToastrService,private modalService: NgbModal, private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getState()
  }
  getState() {
    debugger;
    let stateData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getStates(stateData)
      .subscribe(data => {
        debugger;
        this.statesDropdownValues = data.data;
        this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  onDeleteState(index) {
    debugger;
    let recordToBeDeleted = this.statesDropdownValues[index];
    let enableDisableStateData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "state_Id": recordToBeDeleted.state_Id,
      "state_Name": recordToBeDeleted.state_Name,
      "state_Code": recordToBeDeleted.stateCode,
      "state_Short_Name": recordToBeDeleted.stateShortName,
      "country_Reg_Code": recordToBeDeleted.countryRegCode,
      "zO_Code": recordToBeDeleted.zoCode,
      "e_D_Status": 0
    }
    this.adminService.enableDisableState(enableDisableStateData)
    .subscribe(data=>{
      if(data.message.toUpperCase()==='RECORD FOUND'){
        this.toastr.success(data.data[0].reason);
        this.getState();
      }
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
    },
    (err:HttpErrorResponse)=>{
      console.log(err)
    })
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
