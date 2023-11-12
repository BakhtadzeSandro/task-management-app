import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-name-card',
  templateUrl: './board-name-card.component.html',
  styleUrls: ['./board-name-card.component.scss'],
})
export class BoardNameCardComponent {
  @Input() boardName: string | undefined;
}
