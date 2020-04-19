import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punchlist',
  templateUrl: './punchlist.page.html',
  styleUrls: ['./punchlist.page.scss'],
})
export class PunchlistPage implements OnInit {
  punchList;
  projectId;
  userType;
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(JSON.parse(res.punchList));
      this.punchList = JSON.parse(res.punchList);
      this.projectId = res.projectId;
      this.userType = res.userType;
    });
  }

  addPuchList() {
    this.router.navigate(['/punchlist/add'], {
      queryParams: {
        projectId: this.projectId,
        punchList: this.punchList,
        userType: this.userType
      }
    });
  }

  setDetail(item) {
    this.router.navigate(['/punchlist/detail'], {
      queryParams: {
        item: JSON.stringify(item)
      }
    });
  }
}
