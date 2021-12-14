import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MerchantDetails } from 'src/app/models/merchant-details';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { MerchantHelper } from 'src/app/shared/helpers/merchant.helper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isLinear = true;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  merchantDetails: MerchantDetails = new MerchantDetails();

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }




  constructor(private merchantService: MerchantService) { }

  ngOnInit(): void {
    this.merchantService.getMerchantDetails(MerchantHelper.addMerchantMetadataToModels({})).subscribe(details => {
      this.merchantDetails = details;
    });
  }

}
