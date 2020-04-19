import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectMonthlyUpdatePage } from './project-monthly-update.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectMonthlyUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectMonthlyUpdatePageRoutingModule {}
