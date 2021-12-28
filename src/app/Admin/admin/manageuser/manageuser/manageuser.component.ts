import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { IRandomUsers } from '../../location/regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
  allChecked = false;
  //DataList: DatatoList[] = [];
  GetSaveData: any = [];
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  displayedColumns: string[] = ['sno', 'username', 'email', 'lastLoginDate', 'userrole','actions'];
  private dataArray: any;
  isUserNameSelected: boolean = false;
  isEmailSelected: boolean = false;
  isLastLoginDateSelected: boolean = false;
  isUserRoleSelected: boolean = false;
  public dataSource: MatTableDataSource<IRandomUsers>;
  searchButtonClick: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('select') select: MatSelect;
  selection = new SelectionModel<IRandomUsers>(true, []);
  allSelected = false;
  constructor(private adminService: AdminService, private toastr: ToastrService, 
    private fb: FormBuilder, private router:Router) { }
    searchUserFormGroup: FormGroup;
   
  ngOnInit(): void {
    this.searchUserFormGroup = this.fb.group({
      username: [''],
      lastLoginDate: [''],
      email: [''],
      userrole: ['']
    })
  //this.searchAdminUsers();
  }
  optionClick(value) {
    debugger;
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
    if (value === 'UserName') {
      this.isUserNameSelected = true;
      this.isEmailSelected = false;
      this.isLastLoginDateSelected = false;
      this.isUserRoleSelected = false;
      this.searchUserFormGroup.controls.lastLoginDate.setValue('');
      this.searchUserFormGroup.controls.email.setValue('');
      this.searchUserFormGroup.controls.userrole.setValue('');
    }
    else if (value === 'Email') {
      this.isEmailSelected = true;
      this.isLastLoginDateSelected = false;
      this.isUserRoleSelected = false;
      this.isUserNameSelected = false;
      this.searchUserFormGroup.controls.username.setValue(0);
      this.searchUserFormGroup.controls.lastLoginDate.setValue('');
      this.searchUserFormGroup.controls.userrole.setValue('');
    }
    else if (value === 'LastLoginDate') {
      this.isLastLoginDateSelected = true;
      this.isEmailSelected = false;
      this.isUserRoleSelected = false;
      this.isUserNameSelected = false;
      this.searchUserFormGroup.controls.username.setValue(0);
      this.searchUserFormGroup.controls.userrole.setValue('');
      this.searchUserFormGroup.controls.email.setValue('');
    }
    else if (value === 'UserRole') {
      this.isUserRoleSelected = true;
      this.isUserNameSelected = false;
      this.isEmailSelected = false;
      this.isLastLoginDateSelected = false;
      this.searchUserFormGroup.controls.username.setValue('');
      this.searchUserFormGroup.controls.lastLoginDate.setValue('');
      this.searchUserFormGroup.controls.email.setValue('');
    }
  }
  searchCrieteria: any[] = [
    { value: 'UserName', viewValue: 'User Name' },
    { value: 'Email', viewValue: 'Email' },
    { value: 'LastLoginDate', viewValue: 'Last Login Date' },
    { value: 'UserRole', viewValue: 'User Role' }
  ];

  onSearchButtonClick() {
    debugger;
    let searchUserData = {
      "username": this.searchUserFormGroup.controls.username.value.length > 0 ? this.searchUserFormGroup.controls.username.value:"",
      "email": this.searchUserFormGroup.controls.email.value,
      "lastlogindate": this.searchUserFormGroup.controls.lastLoginDate.value,
      "userrole":this.searchUserFormGroup.controls.userrole.value,
      "useragent": "web",
      "userip": "1",
      "userid": "1"
    }
    this.adminService.search_admin_user(searchUserData)
      .subscribe(data => {
        debugger;
        if (data.message.toUpperCase() === 'RECORD FOUND') {
        
          //this.searchUserTableData=data.data;
          this.dataArray = data.data;
            this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
            this.dataSource.paginator = this.paginator;
        }
        else if (data.status_Code === 401) {

          this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
        }
        else {
          this.toastr.error(data.message)
        }
      },
        (err: HttpErrorResponse) => {
          err;
        });
  }
  onEditButtonClick(){

  }

  limitChange(limit: number) {
   
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
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
