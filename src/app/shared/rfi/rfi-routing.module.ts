import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RfiPage } from './rfi.page';

const routes: Routes = [
  {
    path: '',
    component: RfiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RfiPageRoutingModule {}
