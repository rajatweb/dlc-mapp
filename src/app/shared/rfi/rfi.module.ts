import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RfiPageRoutingModule } from './rfi-routing.module';

import { RfiPage } from './rfi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RfiPageRoutingModule
  ],
  declarations: [RfiPage]
})
export class RfiPageModule {}
