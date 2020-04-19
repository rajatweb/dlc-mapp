import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsbuiltsPageRoutingModule } from './asbuilts-routing.module';

import { AsbuiltsPage } from './asbuilts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsbuiltsPageRoutingModule
  ],
  declarations: [AsbuiltsPage]
})
export class AsbuiltsPageModule {}
