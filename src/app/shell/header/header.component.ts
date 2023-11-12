import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  sidenavOpened = false;
  @Output() sidenavToggle = new EventEmitter<string>();

  sidenavToggler() {
    this.sidenavOpened = !this.sidenavOpened;
    this.sidenavToggle.emit();
  }
}
