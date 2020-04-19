import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectTeamContactPageRoutingModule } from './project-team-contact-routing.module';

import { ProjectTeamContactPage } from './project-team-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectTeamContactPageRoutingModule
  ],
  declarations: [ProjectTeamContactPage]
})
export class ProjectTeamContactPageModule {}
