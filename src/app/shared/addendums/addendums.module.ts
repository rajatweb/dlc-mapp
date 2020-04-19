import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddendumsPageRoutingModule } from './addendums-routing.module';

import { AddendumsPage } from './addendums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddendumsPageRoutingModule
  ],
  declarations: [AddendumsPage]
})
export class AddendumsPageModule {}
