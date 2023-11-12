import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'true',
        style({
          marginLeft: '0',
        })
      ),
      state(
        'false',
        style({
          marginLeft: '-256px',
        })
      ),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('300ms ease-in')),
    ]),
  ],
})
export class MainComponent {
  toggleSidenav = true;

  sidenavToggleHandler() {
    this.toggleSidenav = !this.toggleSidenav;
  }
}
