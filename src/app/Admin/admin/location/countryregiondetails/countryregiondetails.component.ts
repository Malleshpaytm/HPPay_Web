import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IRandomUsers } from '../regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-countryregiondetails',
  templateUrl: './countryregiondetails.component.html',
  styleUrls: ['./countryregiondetails.component.scss']
})
export class CountryregiondetailsComponent implements OnInit {
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
 
  displayedColumns: string[] = ['sno', 'countryRegionCode', 
   'countryRegionName','actions'];
  private dataArray: any;
  
  countryRegions:Array<any>;
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor(private modalService: NgbModal, private adminService:AdminService, private toastr:ToastrService) { }

  ngOnInit(): void {
  //  debugger;
  //   let countryRegionData = {
  //     "Useragent": "web",
  //     "Userip": "1",
  //     "Userid": "1"
  //   }
  //   this.adminService.getAllCountryRegions(countryRegionData)
  //     .subscribe(data => {
  //       debugger;
  //       this.countryRegions = data.data;
  //       this.dataArray = data.data;
  //       this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
  //       this.dataSource.paginator = this.paginator;
  //     },
  //       (err: HttpErrorResponse) => {
  //         console.log(err);
  //       });
  }
  onDeleteCountryRegion(index) {
    debugger;
    let recordToBeDeleted = this.countryRegions[index];
   let enableDisableCountryRegionData=
    {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "zO_Code": recordToBeDeleted.zone_Id,
      "zO_Name": recordToBeDeleted,
      "zO_Short_Name": recordToBeDeleted,
      "zO_ERP_Code": recordToBeDeleted,
      "state_Id": recordToBeDeleted,
      "e_D_Status": 0
    }
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


