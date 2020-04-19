import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeOrderPageRoutingModule } from './change-order-routing.module';

import { ChangeOrderPage } from './change-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeOrderPageRoutingModule
  ],
  declarations: [ChangeOrderPage]
})
export class ChangeOrderPageModule {}
