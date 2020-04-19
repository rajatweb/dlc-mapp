import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectPhotosPageRoutingModule } from './project-photos-routing.module';

import { ProjectPhotosPage } from './project-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectPhotosPageRoutingModule
  ],
  declarations: [ProjectPhotosPage]
})
export class ProjectPhotosPageModule {}
