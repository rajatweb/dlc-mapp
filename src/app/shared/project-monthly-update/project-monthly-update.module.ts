import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectMonthlyUpdatePageRoutingModule } from './project-monthly-update-routing.module';

import { ProjectMonthlyUpdatePage } from './project-monthly-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectMonthlyUpdatePageRoutingModule
  ],
  declarations: [ProjectMonthlyUpdatePage]
})
export class ProjectMonthlyUpdatePageModule {}
