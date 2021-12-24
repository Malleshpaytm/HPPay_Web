import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mc-settlement-details',
  templateUrl: './mer-settlement-details.component.html',
  styleUrls: ['./mer-settlement-details.component.css']
})
export class MerSettlementDetailsComponent implements OnInit {
  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
