import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger;
  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'My Profile',
        routerLink: ['./Profile']
      },
      {
        label: 'Dashboard',
      },
      {
        label: 'Change Password',
      },
      {
        label: 'QR Agents Onboarding',
      },
      {
        label: 'Fuel Pricing',
      },
      {
        label: 'Financials',
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
      {
        label: 'Accept Transactions',
      },
      {
        label: 'Requests',
      },
      {
        label: 'Logout',
      }
    ];
  }

  ngAfterViewInit() {
    this.triggerBtn.openMenu();
  }
}
