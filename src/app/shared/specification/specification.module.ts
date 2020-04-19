import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificationPageRoutingModule } from './specification-routing.module';

import { SpecificationPage } from './specification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificationPageRoutingModule
  ],
  declarations: [SpecificationPage]
})
export class SpecificationPageModule {}
