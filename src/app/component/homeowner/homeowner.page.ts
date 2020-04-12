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
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.notice = JSON.parse(res.userData).notice;
      this.schedule = JSON.parse(res.userData).schedule;
      this.team = JSON.parse(res.userData).team;
      this.punchList = JSON.parse(res.userData).punchList;
    });
  }

  setNotice() {
    this.router.navigate(['/notice'], {
      queryParams: {
        notice: JSON.stringify(this.notice)
      }
    });
  }
}
