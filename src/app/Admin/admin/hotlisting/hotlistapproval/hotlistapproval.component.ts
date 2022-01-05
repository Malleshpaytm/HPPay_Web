import { SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { IRandomUsers } from '../../location/regionalofficedetail/regionalofficedetail.component';

@Component({
  selector: 'app-hotlistapproval',
  templateUrl: './hotlistapproval.component.html',
  styleUrls: ['./hotlistapproval.component.css']
})
export class HotlistapprovalComponent implements OnInit {
  hotlistApprovalFormGroup: FormGroup;
  isshow: number = 0;
  public dataSource: MatTableDataSource<IRandomUsers>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  selection = new SelectionModel<IRandomUsers>(true, []);
  displayedColumns: string[] = ['sno','select','entityCode', 
    'creationDate'];
    private dataArray: any;
  constructor(private adminService: AdminService, public dialog: MatDialog, private fb: FormBuilder,
    public toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.hotlistApprovalFormGroup = this.fb.group({
      entityType: [''],
      entityId: [''],
      fromDate:[''],
      toDate:['']
    })
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  onSearchButtonClick(){
    this.ShowTableList();
    debugger;
    let  get_hotlist_requestsData = {
      "useragent": "web",
      "userip": "1",
      "userid": "1",
      "action": "Temporary Hotlisted",
      "entity_Id":  this.hotlistApprovalFormGroup.controls.entityId.value,
      "from_Date":this.hotlistApprovalFormGroup.controls.fromDate.value,
      "to_Date": this.hotlistApprovalFormGroup.controls.toDate.value,
    }
    
    this.adminService.get_hotlist_requests(get_hotlist_requestsData)
      .subscribe(data => {
       if(data.message.toUpperCase()==="RECORD FOUND"){
        this.dataArray = data.data;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
          //this.GetSavedData=data.data;
          //this.showTableData=true;
          //this.headOfficeDetailsForm.reset();
       }
       else if(data.status_Code===401){
        this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
        this.router.navigate(['/'])
      }
       else if(data.success===false){
         this.toastr.error(data.message);
         this.selection.clear();

         this.dataSource = new MatTableDataSource<IRandomUsers>();
         this.dataSource.paginator = this.paginator;
       }
       
      },
      
      (err: HttpErrorResponse) => {
        this.toastr.error(err.toString());
      });
  }

  onApproveButtonClick() {
    debugger;
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {

        // TODO: Use EventEmitter with form value
        // console.warn(this.hotListFormGroup.value);
        this.selection.selected.forEach(element => {
        let activate_deactivate_entityData = {
          "useragent": "web",
          "userip": "1",
          "userid": "1",
          "entity_Type": element.entity_Type,
          "entity_Id": element.entity_Id,
          "action": "Permanent Hotlisted",
          "reason": "",
          "remarks": "",
        }
        this.adminService.activate_deactivate_entity(activate_deactivate_entityData).subscribe(data => {
          if (data.message.toUpperCase() === 'RECORD FOUND') {
            this.openDialog("Record permanently holisted!");
            this.onSearchButtonClick();
            
          }
          else if (data.status_Code === 401) {
            //
            this.toastr.error('Looks like your session is expired. Login again to enjoy the features of your app.')
          this.router.navigate(['/'])
            // this._document.defaultView.location.reload();
          }
          else {
            this.dialog.open(DialogBoxComponent, {
              width: '400px',
              data: { message: data.reasonPhrase }
            });
          }
        });
      });
      }
    });
  }
  ShowTableList() {
    this.isshow = 1;
  }
  openDialog(message): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '400px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
