import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PunchlistPageRoutingModule } from './punchlist-routing.module';
import { PunchlistPage } from './punchlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PunchlistPageRoutingModule
  ],
  declarations: [PunchlistPage]
})
export class PunchlistPageModule { }
