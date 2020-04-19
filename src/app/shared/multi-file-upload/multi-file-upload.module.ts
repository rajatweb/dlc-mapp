import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiFileUploadComponent } from './multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
    declarations: [MultiFileUploadComponent],
    imports: [ CommonModule , FileUploadModule],
    exports: [MultiFileUploadComponent],
    providers: [],
})
export class MultiFileUploadModule {}