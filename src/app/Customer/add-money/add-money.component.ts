import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor() { }

  ngOnInit(): void {
  }
  limitChange(limit: number) {
   
  }

}
