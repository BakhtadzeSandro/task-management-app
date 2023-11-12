import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kanban-task-management-app';

  ngOnInit() {
    localStorage.setItem('data', JSON.stringify(data));
  }
}
