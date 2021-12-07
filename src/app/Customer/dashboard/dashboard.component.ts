import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export const onSideNavChange = trigger('onSideNavChange', [
  state(
    'close',
    style({
      'min-width': '50px',
    })
  ),
  state(
    'open',
    style({
      'min-width': '200px',
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const animateText = trigger('animateText', [
  state(
    'hide',
    style({
      display: 'none',
      opacity: 0,
    })
  ),
  state(
    'show',
    style({
      display: 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [animateText, onSideNavChange],
})
export class DashboardComponent implements OnInit {
  public linkText: boolean = true;
  isExpanded = true;
  constructor() {}

  ngOnInit(): void {}

  onSinenavToggle() {
    this.isExpanded = !this.isExpanded;
    setTimeout(() => {
      this.linkText = this.isExpanded;
    }, 200);
  }
}
