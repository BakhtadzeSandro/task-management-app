import { Component, inject } from '@angular/core';
import { Data } from '../../models/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-board',
  templateUrl: './choose-board.component.html',
  styleUrls: ['./choose-board.component.scss'],
})
export class ChooseBoardComponent {
  data: Data | undefined;

  private router = inject(Router);

  NavigateToBoard(name: string) {
    this.router.navigate(['board/' + name]);
  }

  ngOnInit() {
    let globalData = localStorage.getItem('data');
    if (globalData) {
      this.data = JSON.parse(globalData);
    }
  }
}
