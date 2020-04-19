import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-photos',
  templateUrl: './project-photos.page.html',
  styleUrls: ['./project-photos.page.scss'],
})
export class ProjectPhotosPage implements OnInit {
  projectPhotos;
  projectId;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.projectPhotos));
      this.projectPhotos = JSON.parse(res.projectPhotos);
      this.projectId = res.projectId;
    });
  }

  addPhotos() {
    this.router.navigate(['/project-photos/add'], {
      queryParams: {
        projectId: this.projectId,
        projectPhotos: this.projectPhotos
      }
    });
  }

  setDetail(item) {
    this.router.navigate(['/project-photos/detail'], {
      queryParams: {
        items: JSON.stringify(item)
      }
    });
  }
}