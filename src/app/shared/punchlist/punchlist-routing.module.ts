import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PunchlistPage } from './punchlist.page';

const routes: Routes = [
  {
    path: '',
    component: PunchlistPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PunchlistPageRoutingModule {}
