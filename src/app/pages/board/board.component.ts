import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board, Data } from '../../models/board.model';
import { Subject, takeUntil } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  data: Data | undefined;
  selectedBoardName = '';
  connectedLists: string[] = [];
  selectedBoard: any;
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
      this.connectedLists = this.selectedBoard?.columns.map(
        (col: any) => col.name
      );
      console.log(this.connectedLists);
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onDrop(event: any) {
    if (event.previousContainer === event.container) {
      // If items are moved within the same container
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // If items are moved between containers
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnDestroy() {
    this.endSubs$.next();
    this.endSubs$.complete();
  }
}
