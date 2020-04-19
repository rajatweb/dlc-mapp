import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RequestChangePageRoutingModule } from './request-change-routing.module';
import { RequestChangePage } from './request-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestChangePageRoutingModule
  ],
  declarations: [RequestChangePage]
})
export class RequestChangePageModule {}
