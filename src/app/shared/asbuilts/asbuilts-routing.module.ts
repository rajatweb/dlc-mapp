import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsbuiltsPage } from './asbuilts.page';

const routes: Routes = [
  {
    path: '',
    component: AsbuiltsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsbuiltsPageRoutingModule {}
