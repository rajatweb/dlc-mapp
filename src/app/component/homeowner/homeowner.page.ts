import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.page.html',
  styleUrls: ['./homeowner.page.scss'],
})
export class HomeownerPage implements OnInit {
  notice: null;
  schedule: null;
  team: null;
  punchList: null;
  projectId;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.notice = JSON.parse(res.userData).notice;
      this.schedule = JSON.parse(res.userData).schedule;
      this.team = JSON.parse(res.userData).team;
      this.punchList = JSON.parse(res.userData).punchList;
      this.projectId = res.projectId;
    });
  }

  setNotice() {
    this.router.navigate(['/notice'], {
      queryParams: {
        notice: JSON.stringify(this.notice)
      }
    });
  }

  setProjectSchedule() {
    this.router.navigate(['/project-schedule'], {
      queryParams: {
        schedule: JSON.stringify(this.schedule)
      }
    });
  }

  setProjectTeam() {
    this.router.navigate(['/project-team-contact'], {
      queryParams: {
        team: JSON.stringify(this.team)
      }
    });
  }

  setPunchList() {
    this.router.navigate(['/punchlist'], {
      queryParams: {
        userType: 'homeOwner',
        projectId: this.projectId,
        punchList: JSON.stringify(this.punchList)
      }
    });
  }
}
