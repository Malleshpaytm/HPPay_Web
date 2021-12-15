import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastrService } from 'ngx-toastr';
import { MerchantDetails } from 'src/app/models/merchant-details';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { MerchantHelper } from 'src/app/shared/helpers/merchant.helper';
import { City } from 'src/app/models/city';
import { State } from 'src/app/models/state';
import { Zone } from 'src/app/models/zone';
import { SalesArea } from 'src/app/models/sales-area';
import { MerchantType } from 'src/app/models/merchant-type';
import { District } from 'src/app/models/district';
import { RegionalOffice } from 'src/app/models/regional-office';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isLinear = true;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  merchantDetails: MerchantDetails = new MerchantDetails();
  cityList: City[];
  stateList: State[];
  zonalOfficeList: Zone[];
  salesAreaList: SalesArea[];
  merchantTypeList: MerchantType[];
  districtList: District[];
  regionalOfficeList: RegionalOffice[];

  cities = [
    {label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
];

  constructor(
    private merchantService: MerchantService,
    private toastrService: ToastrService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.merchantService
      .getMerchantDetails(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((details) => {
        this.merchantDetails = details;
      });

    this.populateOptions();
  }

  populateOptions() {
    this.adminService
      .getCity(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.cityList = resp.data;
      });
    this.adminService
      .getStates(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.stateList = resp.data;
      });
    this.adminService
      .getMerchantType(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.merchantTypeList = resp.data;
      });
    this.adminService
      .getRegionalOffice(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.regionalOfficeList = resp.data;
      });
    this.adminService
      .getZonalOffice(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.zonalOfficeList = resp.data;
      });
    this.adminService
      .getSalesArea(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.salesAreaList = resp.data;
      });
    this.adminService
      .getDistrict(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((resp) => {
        this.districtList = resp.data;
      });
  }

  handleSaveDetails() {
    this.merchantService
      .updateMerchantDetails(
        MerchantHelper.addMerchantMetadataToModels(this.merchantDetails)
      )
      .subscribe((resp) => {
        if (resp.success) {
          this.toastrService.success('Profile Details Updated Successfully');
        } else {
          this.toastrService.error(resp.message);
        }
      });
  }
}
