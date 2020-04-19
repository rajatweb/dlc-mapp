import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-team-contact',
  templateUrl: './project-team-contact.page.html',
  styleUrls: ['./project-team-contact.page.scss'],
})
export class ProjectTeamContactPage implements OnInit {
  team;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.team));
      this.team = JSON.parse(res.team);
    });
  }

}
