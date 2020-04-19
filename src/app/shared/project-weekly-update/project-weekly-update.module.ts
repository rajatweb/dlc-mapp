import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectWeeklyUpdatePageRoutingModule } from './project-weekly-update-routing.module';

import { ProjectWeeklyUpdatePage } from './project-weekly-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectWeeklyUpdatePageRoutingModule
  ],
  declarations: [ProjectWeeklyUpdatePage]
})
export class ProjectWeeklyUpdatePageModule {}
