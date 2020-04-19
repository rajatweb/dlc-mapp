import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardmemberPage } from './boardmember.page';

const routes: Routes = [
  {
    path: '',
    component: BoardmemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardmemberPageRoutingModule {}
