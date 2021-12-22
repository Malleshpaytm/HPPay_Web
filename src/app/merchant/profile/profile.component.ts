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
import { map } from 'rxjs/operators';

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
  displayMerchantDetails: MerchantDetails = new MerchantDetails();
  cityList: City[];
  stateList: State[];
  zonalOfficeList: Zone[];
  salesAreaList: SalesArea[];
  merchantTypeList: MerchantType[];
  districtList: District[];
  regionalOfficeList: RegionalOffice[];

  constructor(
    private merchantService: MerchantService,
    private toastrService: ToastrService,
    private adminService: AdminService
  ) {}

  async ngOnInit(): Promise<void> {
    this.merchantService
      .getMerchantDetails(MerchantHelper.addMerchantMetadataToModels({}))
      .subscribe((details) => {
        this.merchantDetails = details;
      });
    this.merchantDetails = await this.getMerchantDetailsAsync();
    this.displayMerchantDetails = { ...this.merchantDetails };

    await this.populateOptionsAsync();
    setTimeout(() => {
      this.populateMerchantWithOptionCodes();
    }, 0);
  }

  populateMerchantWithOptionCodes() {
    if (this.merchantDetails.perm_City) {
      this.displayMerchantDetails.perm_City = this.cityList.find(
        (city) => this.merchantDetails.perm_City === city.city_Name
      )?.cityCode;
    }

    if (this.merchantDetails.perm_State) {
      this.displayMerchantDetails.perm_State = this.stateList.find(
        (state) => this.merchantDetails.perm_State === state.state_Name
      )?.stateCode;
    }

    if (this.merchantDetails.merchant_Type_Id) {
      this.displayMerchantDetails.merchant_Type_Id = this.merchantTypeList.find(
        (mcType) =>
          this.merchantDetails.merchant_Type_Id === mcType.merchant_Type_Name
      )?.merchant_Type_Id;
    }

    if (this.merchantDetails.regional_Office) {
      this.displayMerchantDetails.regional_Office =
        this.regionalOfficeList.find(
          (ro) => this.merchantDetails.regional_Office === ro.rO_Name
        )?.rO_Code;
    }

    if (this.merchantDetails.zonal_Office) {
      this.displayMerchantDetails.zonal_Office = this.zonalOfficeList.find(
        (zonalOfc) => this.merchantDetails.zonal_Office === zonalOfc.zone_Name
      )?.zone_Code;
    }

    if (this.merchantDetails.salesArea) {
      this.displayMerchantDetails.salesArea = this.salesAreaList.find(
        (salesArea) =>
          this.merchantDetails.salesArea === salesArea.district_Name
      )?.district_Code;
    }

    if (this.merchantDetails.perm_District) {
      this.displayMerchantDetails.perm_District = this.districtList.find(
        (district) =>
          this.merchantDetails.perm_District === district.district_Name
      )?.district_Code;
    }
  }

  async getMerchantDetailsAsync(): Promise<MerchantDetails> {
    return this.merchantService
      .getMerchantDetails(MerchantHelper.addMerchantMetadataToModels({}))
      .toPromise();
  }

  async populateOptionsAsync(): Promise<boolean> {
    let cityPromise = this.adminService
      .getCity(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    let statePromise = this.adminService
      .getStates(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    let merchantTypePromise = this.adminService
      .getMerchantType(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    let regionalOfficePromise = this.adminService
      .getRegionalOffice(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    let zonalOfficePromise = this.adminService
      .getZonalOffice(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    let salesAreaPromise = this.adminService
      .getSalesArea(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    let districtPromise = this.adminService
      .getDistrict(MerchantHelper.addMerchantMetadataToModels({}))
      .pipe(map((resp: any) => resp.data))
      .toPromise();

    this.cityList = await cityPromise;
    this.stateList = await statePromise;
    this.merchantTypeList = await merchantTypePromise;
    this.regionalOfficeList = await regionalOfficePromise;
    this.zonalOfficeList = await zonalOfficePromise;
    this.salesAreaList = await salesAreaPromise;
    this.districtList = await districtPromise;
    return Promise.resolve(true);
  }

  handleSaveDetails() {
    this.displayMerchantDetails.comm_District = this.displayMerchantDetails.comm_District || '';
    this.displayMerchantDetails.comm_City = this.displayMerchantDetails.comm_City || '';
    this.displayMerchantDetails.comm_State = this.displayMerchantDetails.comm_State || '';
    this.merchantService
      .updateMerchantDetails(
        MerchantHelper.addMerchantMetadataToModels(this.displayMerchantDetails)
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
