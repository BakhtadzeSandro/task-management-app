import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board, Data } from '../../models/board.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  data: Data | undefined;
  selectedBoardName = '';
  selectedBoard: Board | undefined;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  endSubs$ = new Subject<void>();

  ngOnInit() {
    this.getDataFromLocalStorage();
    this.getSelectedBoardName();
  }

  getDataFromLocalStorage() {
    let globalData = localStorage.getItem('data');
    if (globalData) {
      this.data = JSON.parse(globalData);
    }
  }

  getSelectedBoardName() {
    this.activatedRoute.params
      .pipe(takeUntil(this.endSubs$))
      .subscribe((params) => {
        this.selectedBoardName = params['name'];
        this.findSelectedBoard(this.selectedBoardName);
      });
  }

  findSelectedBoard(name: string) {
    if (this.data) {
      this.selectedBoard = this.data.boards.find(
        (board) => board.name === name
      );
    }
  }

  ngOnDestroy() {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}
