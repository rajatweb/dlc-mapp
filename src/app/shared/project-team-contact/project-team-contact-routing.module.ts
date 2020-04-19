import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectTeamContactPage } from './project-team-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectTeamContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTeamContactPageRoutingModule {}
