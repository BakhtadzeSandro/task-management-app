import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/board.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  data: Data | undefined;

  ngOnInit() {
    let globalData = localStorage.getItem('data');
    if (globalData) {
      this.data = JSON.parse(globalData);
      console.log(this.data);
    }
  }
}
