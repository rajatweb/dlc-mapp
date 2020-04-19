import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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
  projectPhotosForm: FormGroup;
  projectId;
  projectPhotos;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public projectService: ProjectsService,
              public navCntrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.projectId = res.projectId;
      this.projectPhotos = res.projectPhotos;
     });

    this.projectPhotosForm = new FormGroup({
      sheetName: new FormControl(''),
      locationNumber: new FormControl(''),
      photoType: new FormControl('')
    });
  }

  onSubmit() {
    const files = this.fileField.getFiles();
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file.rawFile, file.name);
    });

    console.log(files);
    formData.append('sheetName', this.projectPhotosForm.value.sheetName);
    formData.append('locationNumber', this.projectPhotosForm.value.locationNumber);
    formData.append('photoType', this.projectPhotosForm.value.photoType);
    formData.append('projectId', this.projectId);
    this.projectService.addProjectPhoto(formData).subscribe(res => {
      alert('Project Photos added!');
      this.navCntrl.navigateBack('/project-photos');
    });
  }

}