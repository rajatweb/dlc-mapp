import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardmember',
  templateUrl: './boardmember.page.html',
  styleUrls: ['./boardmember.page.scss'],
})
export class BoardmemberPage implements OnInit {
  notice: null;
  schedule: null;
  team: null;
  punchList: null;
  weeklyUpdate: null;
  monthlyBudget: null;
  changeOrder: null;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.userData));
      this.notice = JSON.parse(res.userData).notice;
      this.schedule = JSON.parse(res.userData).schedule;
      this.team = JSON.parse(res.userData).team;
      this.punchList = JSON.parse(res.userData).punchList;
      this.weeklyUpdate = JSON.parse(res.userData).weeklyUpdate;
      this.monthlyBudget = JSON.parse(res.userData).monthlyBudget;
      this.changeOrder = JSON.parse(res.userData).changeOrder;
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

  setProjectWeeklyUpdate() {
    this.router.navigate(['/project-weekly-update'], {
      queryParams: {
        weeklyUpdate: JSON.stringify(this.weeklyUpdate)
      }
    });
  }

  setProjectMonthlyUpdate() {
    this.router.navigate(['/project-monthly-update'], {
      queryParams: {
        monthlyBudget: JSON.stringify(this.monthlyBudget)
      }
    });
  }

  setChangeOrder() {
    this.router.navigate(['/change-order'], {
      queryParams: {
        changeOrder: JSON.stringify(this.changeOrder)
      }
    });
  }
}
