import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() routingLinkUrl: string = '';
  @Input() imageIcon: string = '';
  @Input() bodyText = '';
  @Input() title: string = '';

  constructor(public router: Router) {}

  ngOnInit(): void {}

  gotoPage(event: any): void {
    event.stopPropagation();
    this.router.navigate([this.routingLinkUrl]);
  }
}
