import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardmemberPageRoutingModule } from './boardmember-routing.module';

import { BoardmemberPage } from './boardmember.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardmemberPageRoutingModule
  ],
  declarations: [BoardmemberPage]
})
export class BoardmemberPageModule {}
