import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  totalRow: number=5;
  public page: number = 1;
  public pageSize: number = 2;
  constructor() { }

  ngOnInit(): void {
  }
  limitChange(limit: number) {
   
  }

}
