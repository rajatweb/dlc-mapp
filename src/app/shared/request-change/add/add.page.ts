import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { MultiFileUploadComponent } from '../../multi-file-upload/multi-file-upload.component';
import { ProjectsService } from 'src/app/api/projects.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  @ViewChild(MultiFileUploadComponent, {static: false}) fileField: MultiFileUploadComponent;
  changeRequestForm: FormGroup;
  projectId;
  changeRequest;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public projectService: ProjectsService,
              public navCntrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.projectId = res.projectId;
      this.changeRequest = res.changeRequest;
     });

    this.changeRequestForm = new FormGroup({
      sheetNumber: new FormControl(''),
      locationNumber: new FormControl(''),
      message: new FormControl('')
    });
  }

  onSubmit() {
    const files = this.fileField.getFiles();
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file.rawFile, file.name);
    });

    console.log(files);
    formData.append('sheetNumber', this.changeRequestForm.value.sheetNumber);
    formData.append('loactionNumber', this.changeRequestForm.value.locationNumber);
    formData.append('message', this.changeRequestForm.value.message);
    formData.append('projectId', this.projectId);
    this.projectService.addChangeRequest(formData).subscribe(res => {
      alert('Change Request added!');
      this.navCntrl.navigateBack('/request-change');
    });
  }
}
