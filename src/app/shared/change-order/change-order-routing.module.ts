import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeOrderPage } from './change-order.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeOrderPageRoutingModule {}
