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
  selector: 'app-districtdetails',
  templateUrl: './districtdetails.component.html',
  styleUrls: ['./districtdetails.component.scss']
})
export class DistrictdetailsComponent implements OnInit {
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['sno', 'districtCode',
    'districtName', 'stateName', 'actions'];
  private dataArray: any;
  districtTableData: Array<any>;

  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor(private modalService: NgbModal, private adminService: AdminService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    debugger;
    this.getDistrict();
   
  }
  getDistrict(){
    let districtData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getDistrict(districtData)
      .subscribe(data => {
        debugger;
        this.districtTableData = data.data;
        this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );

  }
  navigate(item): void {
    debugger
   this.router.navigate(['/admin/addeditdistrict'], {
     queryParams: {
       isEdit:true,
        data: JSON.stringify(item)
        
     }
  });
 }
onDeleteDistrict(index){
  debugger;
  let recordToBeDeleted=this.districtTableData[index];
  let enableDisableDistrictData={
    "useragent": "web",
    "userip": "1",
    "userid": "1",
    "district_Code": recordToBeDeleted.district_Code,
    "district_Name": recordToBeDeleted.district_Name,
    "district_Short_Name": recordToBeDeleted.district_Short_Name,
    "city_Code": recordToBeDeleted.city_Code,
    "state_Code": recordToBeDeleted.state_Code,
    "rO_Code": recordToBeDeleted.rO_Code,
    "e_D_Status": 0
  }
  this.adminService.enableDisableDistrict(enableDisableDistrictData).subscribe(data=>{
    if(data.message.toUpperCase()==='RECORD FOUND'){
      this.toastr.success(data.data[0].reason);
      this.getDistrict();
    }
    else if(data.status_Code===401){
      this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
      this.router.navigate(['/'])
    }
  },(err:HttpErrorResponse)=>{
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
