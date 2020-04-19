import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AddPageRoutingModule } from './add-routing.module';
import { AddPage } from './add.page';

import { MultiFileUploadModule } from '../../multi-file-upload/multi-file-upload.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPageRoutingModule,
    MultiFileUploadModule
  ],
  declarations: [AddPage]
})
export class AddPageModule {}