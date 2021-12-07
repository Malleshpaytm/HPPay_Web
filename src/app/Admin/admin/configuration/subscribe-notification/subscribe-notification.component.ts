import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-notification',
  templateUrl: './subscribe-notification.component.html',
  styleUrls: ['./subscribe-notification.component.css'],
})
export class SubscribeNotificationComponent implements OnInit {
  selected: any[] = [];
  unselected: any[] = [
    {
      id: 1,
      profile_name: 'MAILFROM',
      name: 'HP pay Reports',
      email: 'report@hppay.in',
      isChecked: false,
    },
    {
      id: 2,
      profile_name: 'REPLYTO Support',
      name: 'HP pay Reports',
      email: 'report@hppay.in',
      isChecked: false,
    },
    {
      id: 3,
      profile_name: 'Sankar narayan',
      name: 'HP pay Reports',
      email: 'report@hppay.in',
      isChecked: false,
    },
    {
      id: 4,
      profile_name: 'trsunder',
      name: 'HP pay Reports',
      email: 'report@hppay.in',
      isChecked: false,
    },
    {
      id: 5,
      profile_name: 'singh.abh',
      name: 'HP pay Reports',
      email: 'report@hppay.in',
      isChecked: false,
    },
  ];

  selectedProfileGrp: any[] = [];
  unselectedProfileGrp: any[] = [
    {
      id: 1,
      profile_group_name: 'Development Group',
      isChecked: false,
    },
    {
      id: 2,
      profile_group_name: 'VFI Operations Group',
      isChecked: false,
    },
    {
      id: 3,
      profile_group_name: 'HPCL Group',
      isChecked: false,
    },
    {
      id: 4,
      profile_group_name: 'ICICI Group',
      isChecked: false,
    },
    {
      id: 5,
      profile_group_name: 'Delta Report Group',
      isChecked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  isSelectedAll(arr: any[]): boolean {
    if (arr.length) {
      return arr.every((val) => val.isChecked);
    } else {
      return false;
    }
  }

  checkedAll(event: any, profileDetails: any[]): void {
    let boolSelectVal: boolean;
    if (event.target.value === 'true') {
      boolSelectVal = false;
    } else {
      boolSelectVal = true;
    }
    profileDetails.forEach((val) => {
      val.isChecked = boolSelectVal;
    });
  }

  moveToSelect(): void {
    this.selected = [
      ...this.selected,
      ...this.unselected.filter((val) => val.isChecked),
    ];
    this.selected = this.selected.map((val) => {
      return { ...val, isChecked: false };
    });
    this.unselected = this.unselected.filter((val) => !val.isChecked);
  }
  moveToUnselect(): void {
    this.unselected = [
      ...this.unselected,
      ...this.selected.filter((val) => val.isChecked),
    ];
    this.unselected = this.unselected.map((val) => {
      return { ...val, isChecked: false };
    });
    this.selected = this.selected.filter((val) => !val.isChecked);
  }

  moveToSelectedProfileGrp(): void {
    this.selectedProfileGrp = [
      ...this.selectedProfileGrp,
      ...this.unselectedProfileGrp.filter((val) => val.isChecked),
    ];
    this.selectedProfileGrp = this.selectedProfileGrp.map((val) => {
      return { ...val, isChecked: false };
    });
    this.unselectedProfileGrp = this.unselectedProfileGrp.filter(
      (val) => !val.isChecked
    );
  }
  moveToUnselectedProfileGrp(): void {
    this.unselectedProfileGrp = [
      ...this.unselectedProfileGrp,
      ...this.selectedProfileGrp.filter((val) => val.isChecked),
    ];
    this.unselectedProfileGrp = this.unselectedProfileGrp.map((val) => {
      return { ...val, isChecked: false };
    });
    this.selectedProfileGrp = this.selectedProfileGrp.filter(
      (val) => !val.isChecked
    );
  }
}
