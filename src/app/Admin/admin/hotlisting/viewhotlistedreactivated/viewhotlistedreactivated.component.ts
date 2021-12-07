import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewhotlistedreactivated',
  templateUrl: './viewhotlistedreactivated.component.html',
  styleUrls: ['./viewhotlistedreactivated.component.css'],
})
export class ViewhotlistedreactivatedComponent implements OnInit {
  showBody: boolean = false;
  entityTypeValue: string = '';
  constructor() {}

  ngOnInit(): void {}

  entityChange(e: any): void {
    this.entityTypeValue = e.target.value;
    if (e.target.value === 'select') {
      this.showBody = false;
    } else {
      this.showBody = true;
    }
  }
  resetValue(): void {
    this.entityTypeValue = '';
    this.showBody = false;
  }
}
