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
  punchListForm: FormGroup;
  projectId;
  punchList;
  userType;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router,
              public projectService: ProjectsService,
              public navCntrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
     this.projectId = res.projectId;
     this.punchList = res.punchList;
     this.userType = res.userType;
    });


    this.punchListForm = new FormGroup({
      message: new FormControl('', Validators.required),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
    });
  }

  onSubmit() {
    const files = this.fileField.getFiles();
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file.rawFile, file.name);
    });

    console.log(files);
    formData.append('projectId', this.projectId);
    formData.append('name', this.punchListForm.value.name);
    formData.append('email', this.punchListForm.value.email);
    formData.append('phone', this.punchListForm.value.phone);
    formData.append('address', this.punchListForm.value.address);
    formData.append('message', this.punchListForm.value.message);
    formData.append('owner', this.userType);
    this.projectService.addPunchList(formData).subscribe(res => {
      alert('PushList added!');
      this.navCntrl.navigateBack('/punchlist');
    });
  }

}

