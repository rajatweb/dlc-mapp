import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificationPage } from './specification.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificationPageRoutingModule {}
