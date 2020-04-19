import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectWeeklyUpdatePage } from './project-weekly-update.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectWeeklyUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectWeeklyUpdatePageRoutingModule {}
