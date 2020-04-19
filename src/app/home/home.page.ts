import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from '../api/projects.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  projects: Observable<any>;
  constructor(public router: Router, private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  setLogin(_id, role) {
    this.router.navigate(['/login'], {
      queryParams: {
        projectId: _id,
        userRole: JSON.stringify(role)
      }
    });
  }

}
