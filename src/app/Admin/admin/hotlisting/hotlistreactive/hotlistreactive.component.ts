import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotlistreactive',
  templateUrl: './hotlistreactive.component.html',
  styleUrls: ['./hotlistreactive.component.css'],
})
export class HotlistreactiveComponent implements OnInit {
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
