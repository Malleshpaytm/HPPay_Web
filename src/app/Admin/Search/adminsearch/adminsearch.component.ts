import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent implements OnInit {
  showBody: boolean = false;
  entityTypeValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  entityChange(e: any): void {
    this.entityTypeValue = e.target.value;
    if (e.target.value === 'select') {
      this.showBody = false;
    } else {
      this.showBody = true;
    }
  }

}
