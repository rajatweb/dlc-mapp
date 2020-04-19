import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddendumsPage } from './addendums.page';

const routes: Routes = [
  {
    path: '',
    component: AddendumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddendumsPageRoutingModule {}
