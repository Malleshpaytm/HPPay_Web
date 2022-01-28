import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger;
  loggedInUserInfo = localStorage.getItem('userInfo');
  loggedInUserInfoArr = JSON.parse(this.loggedInUserInfo)
  items: MenuItem[];
  username=this.loggedInUserInfoArr?.username
  constructor(@Inject(DOCUMENT) private _document: Document) {}
  @ViewChild('sidenav') sidenav: MatSidenav;
 
  reason = '';
  ngOnInit(): void {
    this.items = [
      // {
      //   label: this.username,
      
      // },
      // {
      //   label: 'My Profile',
      //   routerLink: ['./profile']
      // },
      // {
      //   label: 'Dashboard',
      //   routerLink: ['./dashboard'],
      //   styleClass: "navItem"
      // },
      // {
      //   label: 'Change Password',
      //   routerLink: ['./change-password']
      // },
      // {
      //   label: 'QR Agents Onboarding',
      //   routerLink: 'qr-agents-onboarding',
      //   styleClass: "navItem"
      // },
      // {
      //   label: 'Fuel Pricing',
      //   styleClass: "navItem"
      // },
      {
        label: 'Financials',
        styleClass: "navItem hasSub",
        items: [{
          label: 'Settlement Details',
          routerLink: ['./settlement-details']
        },
        {
          label: 'Transaction Details',
          routerLink: ['./transaction-details']
        },
        {
          label: 'MP MR Details',
          routerLink: ['./mpmr-details']
        },
        {
          label: 'ERP Details',
          routerLink: ['./erp-details']
        },
        {
          label: 'Earning Break-Up',
          routerLink: ['./earning-breakup']
        },
        {
          label: 'Day-Wise Merchant Earning Data',
          routerLink: ['./daywise-earning']
        },
        {
          label: 'QR Code Wise Transaction',
          routerLink: ['./qrtransaction-details']
        }
      ]
      },
      // {
      //   label: 'Accept Transactions',
      //   styleClass: "navItem"
      // },
      {
        label: 'Requests',
        styleClass: "navItem",
        items: [{
          label: 'SMS Alerts for Dealers',
          routerLink: ['./settlement-details'],
          
        },
        {
          label: 'QR Agents Onboarding',
          routerLink: 'qr-agents-onboarding',
          // styleClass: "navItem"
        },
      ]
      },
      {
        label: 'Lubes',
        styleClass: "navItem hasSub",
        items: [{
          label: 'Lube Order',
          routerLink: ['./lube-order']
        },
       
      ]
      },
      {
        label: 'Dealership guidelines',
        styleClass: "navItem",
        //routerLink:['../']
      }
    ];
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  
}
