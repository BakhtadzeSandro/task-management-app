import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shell/main/main.component';
import { BoardComponent } from './pages/board/board.component';
import { ChooseBoardComponent } from './pages/choose-board/choose-board.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ChooseBoardComponent,
      },
      {
        path: 'board/:id',
        component: BoardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
