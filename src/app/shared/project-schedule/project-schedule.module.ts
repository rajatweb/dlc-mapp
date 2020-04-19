import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectSchedulePageRoutingModule } from './project-schedule-routing.module';

import { ProjectSchedulePage } from './project-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectSchedulePageRoutingModule
  ],
  declarations: [ProjectSchedulePage]
})
export class ProjectSchedulePageModule {}
