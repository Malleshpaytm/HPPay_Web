import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.scss']
})
export class CitydetailsComponent implements OnInit {
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['sno', 'cityCode', 'cityName', 'actions'];
  private dataArray: any;

  cityTableData: Array<any>
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number = 5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor(private toastr:ToastrService,private modalService: NgbModal, private adminService: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getCity()
  }

  getCity() {
    debugger;
    let cityData = {
      "Useragent": "web",
      "Userip": "1",
      "Userid": "1"
    }
    this.adminService.getCity(cityData)
      .subscribe(data => {
        debugger;
        this.cityTableData = data.data;
        this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        });
  }
  onDeleteCity(index) {
    debugger;
    let recordToBeDeleted = this.cityTableData[index];
    let enableDisableCityData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "city_Id": recordToBeDeleted.city_Id,
      "city_Name": recordToBeDeleted.city_Name,
      "city_Code": recordToBeDeleted.cityCode,
      "city_Short_Name": recordToBeDeleted.cityShortName,
      "district_Code": recordToBeDeleted.districtCode,
      "state_Code": recordToBeDeleted.state_Code,
      "e_D_Status": 0
    }
    this.adminService.enableDisableCity(enableDisableCityData)
    .subscribe(data=>{
      if(data.message.toUpperCase()==='RECORD FOUND'){
        this.toastr.success(data.data[0].reason);
        this.getCity()
      }
      else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
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
  navigate(item): void {
    debugger
   this.router.navigate(['/admin/addeditcity'], {
     queryParams: {
       isEdit:true,
        data: JSON.stringify(item)
        
     }
  });
 }

}
